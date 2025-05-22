import { PrismaClient } from "@/generated/prisma";

// Declare a global variable to hold the PrismaClient instance, especially for development hot-reloading.
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

let prisma: PrismaClient;
let shuttingDown = false; // Flag to prevent multiple shutdown attempts

// Setup process shutdown hooks once for the single client
const setupShutdownHooks = (client: PrismaClient) => {
  const gracefulShutdown = async (signal: string) => {
    if (shuttingDown) return;
    shuttingDown = true;
    console.log(`Received ${signal}. Shutting down gracefully...`);
    try {
      await client.$disconnect();
      console.log("Prisma client disconnected.");
      process.exit(0);
    } catch (e) {
      console.error("Error during Prisma client disconnection:", e);
      process.exit(1);
    }
  };

  process.once("SIGINT", () => gracefulShutdown("SIGINT"));
  process.once("SIGTERM", () => gracefulShutdown("SIGTERM"));

  // Optional: 'beforeExit' is for synchronous cleanup, $disconnect is async.
  // It might be better to rely on SIGINT/SIGTERM for async cleanup.
  // process.on('beforeExit', async () => {
  //   console.log('beforeExit: Cleaning up...');
  //   // Note: $disconnect() is async, 'beforeExit' ideally for sync code.
  //   // If $disconnect() doesn't finish, it might be abrupt.
  //   await client.$disconnect();
  //   console.log('Prisma client disconnected in beforeExit.');
  // });
};

const createPrismaClient = (): PrismaClient => {
  console.log("Creating new PrismaClient instance...");
  const client = new PrismaClient({
    // log: process.env.NODE_ENV === 'development' ? ['query', 'info', 'warn', 'error'] : ['error'],
  });
  setupShutdownHooks(client); // Setup hooks for the single instance
  return client;
};

/**
 * Retrieves the PrismaClient instance.
 * In development, it reuses an existing instance or creates one if it doesn't exist,
 * attaching it to `globalThis` to survive hot reloads.
 * In production, it ensures a single instance is created and reused.
 *
 * @returns The PrismaClient instance.
 */
export const getPrismaClient = (): PrismaClient => {
  try {
    if (process.env.NODE_ENV === "production") {
      if (!prisma) {
        prisma = createPrismaClient();
      }
      return prisma;
    } else {
      // Development: use globalThis to preserve the instance across hot reloads
      if (!globalThis.prisma) {
        globalThis.prisma = createPrismaClient();
      }
      prisma = globalThis.prisma;
      return prisma;
    }
  } catch (error) {
    console.error(
      "Error while ensuring Prisma client:",
      (error as Error).message
    );
    // Depending on the application, you might want to gracefully handle this
    // or let the application crash if the DB is essential.
    throw new Error(
      "Cannot establish or retrieve a connection with the database. Please try again later."
    );
  }
};

// Initialize and export the client directly if you prefer a singleton module pattern.
// This ensures the client is created once when the module is first imported.
// const client = getPrismaClient();
// export default client;

// Or, continue to export the function if you need to call it explicitly in specific places,
// though for Prisma, a singleton is generally preferred.
// For now, keeping your original export pattern:
export const generatePrismaClient = getPrismaClient; // Alias to keep your original function name
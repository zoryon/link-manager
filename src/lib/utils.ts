import { FilterParams } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isValidUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return ['http:', 'https:'].includes(parsed.protocol);
  } catch (_) {
    return false;
  }
}

export function getTldFromUrl(url: string) {
  try {
    const host = new URL(url).hostname;
    const parts = host.split('.');
    if (parts.length < 2) return host;
    // Take the last part: com, org, it, etc.
    return parts[parts.length - 1];
  } catch {
    return '';
  }
};

export function getSearchParams(): URLSearchParams {
  if (typeof window === 'undefined') {
    return new URLSearchParams();
  }
  return new URLSearchParams(window.location.search);
}

export function getQueryParams() {
  if (typeof window === 'undefined') return {};

  const params = new URLSearchParams(window.location.search);
  return {
    name: params.get('name') || '',
    date: params.get('date') || '',
    domain: params.get('domain') || '',
  };
};

export function updateUrlWithFilters(filters: FilterParams) {
  // Funziona solo lato client
  if (typeof window === 'undefined') return

  const params = new URLSearchParams(window.location.search)

  // Gestione parametro 'name'
  if (filters.name?.trim()) {
    params.set('name', filters.name)
  } else {
    params.delete('name')
  }

  // Gestione parametro 'date'
  if (filters.date && filters.date !== 'all') {
    params.set('date', filters.date)
  } else {
    params.delete('date')
  }

  // Gestione parametro 'domain'
  if (filters.domain && filters.domain !== 'all') {
    params.set('domain', filters.domain)
  } else {
    params.delete('domain')
  }

  // Costruzione URL finale
  const queryString = params.toString()
  const newUrl = queryString 
    ? `${window.location.pathname}?${queryString}`
    : window.location.pathname

  // Aggiornamento URL senza ricaricamento
  window.history.pushState({}, '', newUrl)
}

export function formatTimeDistance(dateString: any) {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return 'just now';
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) {
    return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
  }

  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    return `${diffInMonths} month${diffInMonths > 1 ? 's' : ''} ago`;
  }

  const diffInYears = Math.floor(diffInMonths / 12);
  return `${diffInYears} year${diffInYears > 1 ? 's' : ''} ago`;
};
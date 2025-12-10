import { create } from 'zustand';
import { User, Property, Artisan, Job } from '@/types';

interface AppState {
  user: User | null;
  properties: Property[];
  artisans: Artisan[];
  jobs: Job[];
  setUser: (user: User | null) => void;
  setProperties: (properties: Property[]) => void;
  setArtisans: (artisans: Artisan[]) => void;
  setJobs: (jobs: Job[]) => void;
  addProperty: (property: Property) => void;
  updateProperty: (id: string, updates: Partial<Property>) => void;
  addJob: (job: Job) => void;
  updateJob: (id: string, updates: Partial<Job>) => void;
}

export const useStore = create<AppState>((set) => ({
  user: null,
  properties: [],
  artisans: [],
  jobs: [],
  
  setUser: (user) => set({ user }),
  
  setProperties: (properties) => set({ properties }),
  
  setArtisans: (artisans) => set({ artisans }),
  
  setJobs: (jobs) => set({ jobs }),
  
  addProperty: (property) =>
    set((state) => ({ properties: [...state.properties, property] })),
  
  updateProperty: (id, updates) =>
    set((state) => ({
      properties: state.properties.map((p) =>
        p.id === id ? { ...p, ...updates } : p
      ),
    })),
  
  addJob: (job) =>
    set((state) => ({ jobs: [...state.jobs, job] })),
  
  updateJob: (id, updates) =>
    set((state) => ({
      jobs: state.jobs.map((j) =>
        j.id === id ? { ...j, ...updates } : j
      ),
    })),
}));


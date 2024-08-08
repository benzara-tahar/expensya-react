import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export type User = {
   id: string;
   name: string;
}

export type LoginRequest = { 
   HasSso:  boolean,
   Language:  string,
   Login:  string,
   Password:  string,
   SetLightSession:  boolean, // generates smaller token to be stored in the cookies ? 
   Version:  null,
};


export type LoginResponse = { user: User, token: string }
export interface AuthState {
   user: User | null;
   // isLoggedIn : () => boolean; 
   login: (request: LoginRequest) => Promise<unknown>
   logout: () => Promise<unknown>,
}

export const useAuthStore = create<AuthState>() (
   devtools(
     persist(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (set) => ({
        user : null,
      login: async (request: LoginRequest) => {
        return Promise.resolve(request);
      },
      logout: async () => {
         return;
      },
      }),
      { name: 'auth_store' },
   ), 
   ),
 )
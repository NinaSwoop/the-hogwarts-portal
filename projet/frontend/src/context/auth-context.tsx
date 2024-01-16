import React, { createContext, useContext, useState, ReactNode, useEffect  } from 'react';
import { Role } from '../../../@types/role';
import { Wizard } from '../../../@types/wizard';

interface AuthContextInterface {
  isAuthenticated: boolean;
  token: string | null;
  login: (event: React.FormEvent) => Promise<boolean>;
  logout: () => void;
//   handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  wizard: Wizard | null;
}

export const AuthContext = createContext<AuthContextInterface>({
    isAuthenticated: false,
    token: null,
    login : async (event: React.FormEvent) => {return false},
    logout: () => {},
    wizard: null,
});

export const useAuth = () => {
    return useContext(AuthContext);
};
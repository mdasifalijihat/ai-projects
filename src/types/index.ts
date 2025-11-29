import { LucideIcon } from "lucide-react";
import { ComponentType } from "react";

export type AIProvider = "chatgpt" | "grok" | "gemini" | "claude";

export interface AIOption {
  id: AIProvider;
  name: string;
  icon: ComponentType<React.SVGProps<SVGAElement>> | LucideIcon;
  color: string;
  description: string;
  MODEL?: string;
}

export interface User {
  uid: string;
  email?: string;
  displayName?: string;
  isAnonymous: boolean;
  photoURL?: string;
  emailVerified?: boolean;
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  signUpWithEmail: (email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signInAnonymously: () => Promise<void>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

export interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: string;
  ai: AIProvider;
  userId?: string;
  chatId: string;
}

export interface Chat {
  id: string;
  title: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  messagesCount: number;
  aiProvider?: AIProvider;
  lastMessage?: Message;
  isAnonymous?: boolean;
}

export interface APIResponse {
  success: boolean;
  message?: string;
  error?: string;
}

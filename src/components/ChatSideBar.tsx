"use client";
import { LogIn, LogOut, Plus, Sparkle, User } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";

const SidebarContent = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");

  const handleSignOut = () => {
    console.log("User signed out");
  };

  const isAnonymousUser = true;

  const handleNewChat = () => {
    console.log("New chat initiated");
  };

  return (
    <div className="flex h-full flex-col ">
      <div className="p-4">
        <Link href="/" className="flex items-center space-x-2 mb-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-r from-purple-500 to-pink-500 text-white">
            <Sparkle className="flex h-8 w-8 text-white" />
          </div>
          <span className="font-semibold"> AI Chat Hub</span>
        </Link>
        <Button
          onClick={handleNewChat}
          className="w-full"
          variant="outline"
          size="sm"
        >
          <Plus />
          New Chat
        </Button>
      </div>
      <Separator />
      {/* isAnonymous User notice */}
      {isAnonymousUser && (
        <div className="p-4">
          <Card className="border">
            <CardContent className="p-3">
              <p className="text-sm mb-2 text-destructive">
                💡 Your&apos;re currently using an anonymous account.{" "}
              </p>
              <p className="text-xs mb-3 ">
                Sign in to save your chats and access them from any device.
              </p>
              <Button
                onClick={() => {
                  setAuthMode("signin");
                  setShowAuthModal(true);
                }}
                className=" w-full"
                variant="outline"
                size="sm"
              >
                <LogIn /> Sign In
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* chat list  */}

      <div className="flex-1 overflow-hidden p-4">
        <p>Chat list will go here </p>
      </div>
      <Separator />
      {/* user information */}
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Avatar className="h-8 w-8">
              <AvatarFallback
                className={isAnonymousUser ? "bg-yellow-500" : "bg-green-500"}
              >
                <User />
              </AvatarFallback>
            </Avatar>
            <div className="min-h-0 flex-1">
              <p className="text-sm font-medium line-clamp-1">Anonymous User</p>
              <div className="flex mt-0.5 items-center space-x-1">
                <Badge variant={isAnonymousUser ? "secondary" : "default"}>
                  {isAnonymousUser ? "Anonymous" : "Signed In"}
                </Badge>
              </div>
            </div>
          </div>

          <div>
            {!isAnonymousUser ? (
              <Button
                onClick={() => {
                  setAuthMode("signin");
                  setShowAuthModal(true);
                }}
                className=" w-full"
                variant="outline"
                size="sm"
              >
                <LogIn /> Sign In
              </Button>
            ) : (
              <Button variant="ghost" size="icon">
                <LogOut className="h-4 w-4" onClick={handleSignOut} />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

function ChatSideBar() {
  return (
    <div className="h-screen">
      <div className="hidden h-full lg:flex lg:w-80 lg:flex-col lg:border-r ">
        <SidebarContent />
      </div>
    </div>
  );
}

export default ChatSideBar;

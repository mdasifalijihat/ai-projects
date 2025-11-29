"use client";
import { ChevronDown, Sparkle } from "lucide-react";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { Badge } from "./ui/badge";
import ModeToggle from "./ModeToggle";
import { aiOptions } from "../constants/data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

function ChatInterface() {
  const [inputMessage, setInputMessage] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isAnonymousUser = true;
  const currentAI = aiOptions[0]; // Example: selecting the first AI option
  return (
    <div className="flex flex-col h-screen bg-background w-full">
      {/* header */}
      <header className="border-b bg-card/50 backdrop-blur supports-backdrop-filter:bg-card/60 px-4">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-r from-purple-500 to-pink-500 text-white">
                <Sparkle className="flex h-8 w-8 text-white" />
              </div>
              <div>
                <div className="flex">
                  <h1 className="font-semibold hidden sm:block">
                    {" "}
                    AI Chat Hub
                  </h1>
                  <Badge
                    variant={isAnonymousUser ? "secondary" : "default"}
                    className="md:ml-2 border border-primary/50"
                  >
                    {isAnonymousUser ? "Anonymous User" : "Signed In"}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground hidden sm:block">
                  multiple assistants in one place
                </p>
              </div>
            </div>
          </Link>
          {/* other  */}
          <div className="flex items-center gap-4">
            <ModeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant={"outline"}
                  className="max-w-[200px] justify-between"
                >
                  <div className="flex item-center gap-2">
                    <div
                      className={`p-1 rounded-sm bg-gradient-to-r ${currentAI.color}`}
                    >
                      <currentAI.icon className="h-4 w-4" />
                    </div>
                  </div>
                  <span className="ml-2 truncate">{currentAI.name}</span>
                  <ChevronDown className="ml-2 size-4 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {aiOptions?.map((ai) => (
                  <DropdownMenuItem key={ai.id}>
                    <div className="flex items-center space-x-3 p-3">
                      <div
                        className={`p-1 rounded-sm bg-gradient-to-r ${ai.color}`}
                      >
                        <ai.icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <h2 className="font-medium">{ai?.name}</h2>
                        <p className="text-xs text-muted-foreground">
                          {ai.description}
                        </p>
                      </div>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
    </div>
  );
}

export default ChatInterface;

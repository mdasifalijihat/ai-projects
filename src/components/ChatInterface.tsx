"use client";
import { ChevronDown, Send, Sparkle, Sparkles } from "lucide-react";
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
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";

function ChatInterface() {
  const [inputMessage, setInputMessage] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isAnonymousUser = true;
  const currentAI = aiOptions[0];
  const handleSendMessage = () => {
    // Logic to send message
    console.log("Message sent:", inputMessage);
  };

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

      {/* Main Chat Area */}
      <div className=" flex-1 py-6 px-4">
        <div className="w-full space-y-6 h-full flex flex-col justify-between">
          {/* welcome Message */}
          <div>
            <div className="mb-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="h-6 w-6 text-purple-500" />
                </div>
                <div className="prose prose-sm text-muted-foreground">
                  <h3 className="font-semibold text-primary mb-1">
                    {" "}
                    welcome to AI Chat HUB! 🙋‍♀️
                  </h3>
                  <p className="text-primary/80 text-sm mb-2">
                    {isAnonymousUser
                      ? "You are currently using the app as an anonymous user. Sign up or log in to save your chat history and access more features!"
                      : "Thank you for logging in! You can now save your chat history and access additional features."}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-2 py-1 bg-white/10 rounded-lg text-xs">
                      💬 Type a message in the input box below to start chatting
                      with AI Chat HUB.
                    </span>
                    <span className="inline-flex items-center px-2 py-1 bg-white/10 rounded-lg text-xs">
                      🔄 Switch between different AI assistants using the AI
                      selector in the header.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* card */}
            <Card className="border-dashed">
              <CardContent className="pt-6">
                <div className="text-center space-y-4 ">
                  <div
                    className={`mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${currentAI.color}`}
                  >
                    <currentAI.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">
                      {" "}
                      Start your chat with {currentAI.name}{" "}
                    </h2>
                    <p className="text-muted-foreground mt-2">
                      {currentAI.description}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 max-w-lg mx-auto gap-2 mt-4">
                    {[
                      "What can you help me with?",
                      "Explain quantum computing",
                      "write a poem about AI",
                      "How to make a website?",
                    ].map((prompt, index) => (
                      <Button
                        onClick={() => setInputMessage(prompt)}
                        key={index}
                        variant={"outline"}
                        className="h-auto text-left p-3 justify-start "
                      >
                        <span>{prompt}</span>
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* messages  */}
          {/* Input Area */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex space-x-2">
                <div className="flex-1 ">
                  <Input
                    ref={inputRef}
                    value={inputMessage}
                    placeholder={`Message ${currentAI?.name}`}
                    onChange={(e) => setInputMessage(e.target.value)}
                    className="min-h-12"
                    //disabled
                  />
                </div>
                <Button
                  className="h-12 w-12 "
                  size={"icon"}
                  // disabled
                  onClick={handleSendMessage}
                >
                  <Send className=" w-6 h-6" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ChatInterface;

"use client";
import React, { useRef, useState } from "react";
import ChatInterface from "./ChatInterface";

function HomePageContent() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <ChatInterface />
    </div>
  );
}

export default HomePageContent;

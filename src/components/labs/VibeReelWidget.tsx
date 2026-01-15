"use client";

import { Card, Title, Text, Button } from "@tremor/react";
import { Film } from "lucide-react";
import { motion } from "framer-motion";

export default function VibeReelWidget() {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
        >
            <Card
                className="h-full flex flex-col justify-between overflow-hidden relative bg-black border-zinc-800"
                decoration="top"
                decorationColor="violet"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 to-black pointer-events-none" />

                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-violet-500/20 text-violet-500">
                            <Film size={20} />
                        </span>
                        <span className="text-xs font-mono uppercase tracking-wider text-violet-500">
                            Vibe Coding
                        </span>
                    </div>

                    <Title className="text-white mb-2">Vibe Reel (What to Watch AI)</Title>
                    <Text className="text-zinc-400 mb-6">
                        AI-powered movie discovery that matches films to your mood. Skip genres—describe a feeling and get personalized recommendations.
                    </Text>
                </div>

                <div className="relative z-10 mt-6">
                    <div className="bg-zinc-900/50 rounded-lg p-4 border border-zinc-800 font-mono text-xs text-zinc-300">
                        <div className="flex justify-between mb-2">
                            <span>Current Vibe:</span>
                            <span className="text-violet-400">"cozy rainy night nostalgia"</span>
                        </div>
                        <div className="space-y-1 opacity-70">
                            <div className="flex justify-between">
                                <span>🎬 Amélie</span>
                                <span>2001</span>
                            </div>
                            <div className="flex justify-between">
                                <span>🎬 Lost in Translation</span>
                                <span>2003</span>
                            </div>
                            <div className="flex justify-between">
                                <span>🎬 Eternal Sunshine</span>
                                <span>2004</span>
                            </div>
                        </div>
                    </div>

                    <a
                        href="https://what-to-watch-ai-vert.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full mt-4"
                    >
                        <Button
                            size="md"
                            className="w-full bg-violet-600 hover:bg-violet-700 border-none text-white"
                        >
                            Launch App
                        </Button>
                    </a>
                </div>
            </Card>
        </motion.div>
    );
}

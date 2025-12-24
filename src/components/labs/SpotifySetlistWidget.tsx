"use client";

import { Card, Title, Text, Button } from "@tremor/react";
import { PlayCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function SpotifySetlistWidget() {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
        >
            <Card
                className="h-full flex flex-col justify-between overflow-hidden relative bg-black border-zinc-800"
                decoration="top"
                decorationColor="green"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-black pointer-events-none" />

                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20 text-green-500">
                            <PlayCircle size={20} />
                        </span>
                        <span className="text-xs font-mono uppercase tracking-wider text-green-500">
                            Vibe Coding
                        </span>
                    </div>

                    <Title className="text-white mb-2">Spotify Setlist Generator</Title>
                    <Text className="text-zinc-400 mb-6">
                        AI-powered setlist curator. Analyzes BPM, Key, and Energy to create the perfect flow for any vibe.
                    </Text>
                </div>

                <div className="relative z-10 mt-6">
                    <div className="bg-zinc-900/50 rounded-lg p-4 border border-zinc-800 font-mono text-xs text-zinc-300">
                        <div className="flex justify-between mb-2">
                            <span>Current Vibe:</span>
                            <span className="text-green-400">"Peak Hour Techno"</span>
                        </div>
                        <div className="space-y-1 opacity-70">
                            <div className="flex justify-between">
                                <span>01. Strobe</span>
                                <span>128 BPM</span>
                            </div>
                            <div className="flex justify-between">
                                <span>02. Opus</span>
                                <span>126 BPM</span>
                            </div>
                            <div className="flex justify-between">
                                <span>03. Arguru</span>
                                <span>128 BPM</span>
                            </div>
                        </div>
                    </div>

                    <Button
                        size="md"
                        className="w-full mt-4 bg-green-600 hover:bg-green-700 border-none text-white"
                    >
                        Launch Experiment
                    </Button>
                </div>
            </Card>
        </motion.div>
    );
}

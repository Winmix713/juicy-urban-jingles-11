
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Download, Package, Globe, Copy, Check, ExternalLink } from "lucide-react";
import ComponentShowcase from "@/components/system/ComponentShowcase";
import DesignTokens from "@/components/system/DesignTokens";
import CssUtilities from "@/components/system/CssUtilities";
import InstallationGuide from "@/components/system/InstallationGuide";

const System = () => {
  const [activeTab, setActiveTab] = useState("components");
  const [copied, setCopied] = useState(false);

  const handleCopyCommand = (command: string) => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8 space-y-4">
        <div className="flex flex-col space-y-2">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">WinMix Design System</h1>
          <p className="text-gray-400 text-lg">
            A comprehensive collection of reusable components, design tokens, and guidelines for creating consistent interfaces
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge>v1.0.0</Badge>
          <Badge variant="outline" className="text-blue-400 border-blue-400">React</Badge>
          <Badge variant="outline" className="text-purple-400 border-purple-400">Vite</Badge>
          <Badge variant="outline" className="text-teal-400 border-teal-400">Tailwind CSS</Badge>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <div className="bg-gray-900/40 border border-white/5 backdrop-blur-sm rounded-lg p-1">
          <TabsList className="w-full grid grid-cols-2 md:grid-cols-5 bg-gray-900/60">
            <TabsTrigger value="components" className="data-[state=active]:bg-blue-500/20">
              Components
            </TabsTrigger>
            <TabsTrigger value="design-tokens" className="data-[state=active]:bg-blue-500/20">
              Design Tokens
            </TabsTrigger>
            <TabsTrigger value="css-utilities" className="data-[state=active]:bg-blue-500/20">
              CSS Utilities
            </TabsTrigger>
            <TabsTrigger value="installation" className="data-[state=active]:bg-blue-500/20">
              Installation
            </TabsTrigger>
            <TabsTrigger value="export" className="data-[state=active]:bg-blue-500/20">
              Export
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="components" className="animate-slide-in-bottom space-y-8">
          <ComponentShowcase />
        </TabsContent>

        <TabsContent value="design-tokens" className="animate-slide-in-bottom space-y-6">
          <DesignTokens />
        </TabsContent>

        <TabsContent value="css-utilities" className="animate-slide-in-bottom space-y-6">
          <CssUtilities />
        </TabsContent>

        <TabsContent value="installation" className="animate-slide-in-bottom space-y-6">
          <InstallationGuide />
        </TabsContent>

        <TabsContent value="export" className="animate-slide-in-bottom space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gray-900/40 border border-white/5 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="w-5 h-5 text-blue-400" />
                  NPM Package
                </CardTitle>
                <CardDescription>
                  Install the design system as a dependency in your project
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-black/50 p-3 rounded-md font-mono text-sm relative group">
                  <p className="text-white">npm install winmix-design-system</p>
                  <button 
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    onClick={() => handleCopyCommand("npm install winmix-design-system")}
                  >
                    {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-gray-400" />}
                  </button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/40 border border-white/5 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="w-5 h-5 text-blue-400" />
                  Download Package
                </CardTitle>
                <CardDescription>
                  Download the compiled CSS and component files directly
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Download CSS
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download Components
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/40 border border-white/5 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-blue-400" />
                  CDN Link
                </CardTitle>
                <CardDescription>
                  Import directly from CDN in your HTML
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-black/50 p-3 rounded-md font-mono text-sm text-white relative group">
                  <p className="text-white break-all">&lt;link rel="stylesheet" href="https://cdn.winmix.com/design-system@1.0.0/style.css"&gt;</p>
                  <button 
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    onClick={() => handleCopyCommand('<link rel="stylesheet" href="https://cdn.winmix.com/design-system@1.0.0/style.css">')}
                  >
                    {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-gray-400" />}
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-gray-900/40 border border-white/5 backdrop-blur-sm mt-6">
            <CardHeader>
              <CardTitle>Package Generator</CardTitle>
              <CardDescription>Customize and generate a package with only the components you need</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
                {["Button", "Card", "Avatar", "Badge", "Input", "Form", "Select", "Dialog", "Tooltip", "Alert"].map((component) => (
                  <div key={component} className="flex items-center space-x-2">
                    <input type="checkbox" id={component} className="checkbox bg-gray-800 border-white/10" />
                    <label htmlFor={component} className="text-sm text-gray-200">{component}</label>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto">
                <Package className="w-4 h-4 mr-2" />
                Generate Package
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="bg-gray-900/40 border border-white/5 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Design System Repository</CardTitle>
              <CardDescription>Access the source code and contribute to the design system</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 bg-blue-500 rounded-full"></div>
                  <span className="text-white">winmix/design-system</span>
                </div>
                <Button variant="outline" size="sm" className="text-xs">
                  <ExternalLink className="w-3 h-3 mr-1" />
                  View on GitHub
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default System;


import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { AlertCircle, Check, Copy, Download, ExternalLink, Eye, FileJson, Github, Package } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from '../components/Header';
import { useToast } from "@/hooks/use-toast";

const System = () => {
  const [selectedTab, setSelectedTab] = useState("components");
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const { toast } = useToast();

  // Color palette from the design system
  const colors = [
    { name: "background", variable: "--background", value: "220 33% 8%" },
    { name: "foreground", variable: "--foreground", value: "210 40% 98%" },
    { name: "primary", variable: "--primary", value: "220 100% 65%" },
    { name: "secondary", variable: "--secondary", value: "215 25% 20%" },
    { name: "accent", variable: "--accent", value: "216 34% 18%" },
    { name: "muted", variable: "--muted", value: "217 33% 18%" },
    { name: "destructive", variable: "--destructive", value: "0 84% 60%" },
    { name: "border", variable: "--border", value: "217 33% 18%" },
  ];

  const components = [
    { name: "Accordion", import: "import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from \"@/components/ui/accordion\"" },
    { name: "Alert", import: "import { Alert, AlertTitle, AlertDescription } from \"@/components/ui/alert\"" },
    { name: "Alert Dialog", import: "import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel } from \"@/components/ui/alert-dialog\"" },
    { name: "Aspect Ratio", import: "import { AspectRatio } from \"@/components/ui/aspect-ratio\"" },
    { name: "Avatar", import: "import { Avatar, AvatarImage, AvatarFallback } from \"@/components/ui/avatar\"" },
    { name: "Badge", import: "import { Badge } from \"@/components/ui/badge\"" },
    { name: "Button", import: "import { Button } from \"@/components/ui/button\"" },
    { name: "Card", import: "import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from \"@/components/ui/card\"" },
    { name: "Input", import: "import { Input } from \"@/components/ui/input\"" },
    { name: "Label", import: "import { Label } from \"@/components/ui/label\"" },
    { name: "Tabs", import: "import { Tabs, TabsList, TabsTrigger, TabsContent } from \"@/components/ui/tabs\"" },
  ];

  const cssUtilities = [
    { name: "glass-effect", description: "Adds a frosted glass effect", code: "className=\"glass-effect\"" },
    { name: "hover-glow", description: "Adds a subtle glow effect on hover", code: "className=\"hover-glow\"" },
    { name: "text-gradient", description: "Creates a gradient text effect", code: "className=\"text-gradient bg-gradient-to-r from-blue-500 to-purple-500\"" },
    { name: "btn-primary", description: "Primary button styling with interactions", code: "className=\"btn-primary\"" },
    { name: "card-hover", description: "Card hover animation", code: "className=\"card-hover\"" },
    { name: "shine-effect", description: "Creates a shine animation", code: "className=\"shine-effect\"" },
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(text);
    toast({
      title: "Copied to clipboard",
      description: "The code has been copied to your clipboard.",
    });
    setTimeout(() => setCopiedCode(null), 2000);
  };

  // Basic package.json template
  const packageJsonTemplate = `{
  "name": "design-system",
  "version": "0.1.0",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "dependencies": {
    "@radix-ui/react-accordion": "^1.1.2",
    "@radix-ui/react-alert-dialog": "^1.0.5",
    "@radix-ui/react-aspect-ratio": "^1.0.3",
    "@radix-ui/react-avatar": "^1.0.4",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "lucide-react": "^0.274.0",
    "tailwind-merge": "^1.14.0",
    "tailwindcss-animate": "^1.0.7"
  },
  "peerDependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  }
}`;

  const tailwindConfigTemplate = `/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
        },
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "scale-in": "scale-in 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}`;

  const installationSteps = [
    {
      title: "Install Dependencies",
      description: "Install the required dependencies for your project",
      code: "npm install tailwindcss postcss autoprefixer @radix-ui/react-* class-variance-authority clsx lucide-react tailwind-merge tailwindcss-animate"
    },
    {
      title: "Set up Tailwind CSS",
      description: "Create a tailwind.config.js in your project root",
      code: "npx tailwindcss init -p"
    },
    {
      title: "Configure Tailwind CSS",
      description: "Copy the tailwind configuration to your tailwind.config.js",
      code: tailwindConfigTemplate
    },
    {
      title: "Import CSS Variables",
      description: "Add these CSS variables to your global CSS file",
      code: `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 220 33% 8%;
    --foreground: 210 40% 98%;
    --card: 222 47% 5%;
    --card-foreground: 210 40% 98%;
    --popover: 222 47% 5%;
    --popover-foreground: 210 40% 98%;
    --primary: 220 100% 65%;
    --primary-foreground: 210 40% 98%;
    --secondary: 215 25% 20%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217 33% 18%;
    --muted-foreground: 215 20% 65%;
    --accent: 216 34% 18%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 84% 60%;
    --destructive-foreground: 210 40% 98%;
    --border: 217 33% 18%;
    --input: 217 33% 18%;
    --ring: 224 76% 48%;
    --radius: 0.5rem;
  }
}`
    },
    {
      title: "Copy UI Components",
      description: "Copy the UI component files from this project",
      code: "Copy the entire /components/ui directory to your project"
    },
    {
      title: "Set Up Utils",
      description: "Create a utils.ts file for helper functions",
      code: `// lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`
    },
  ];
  
  const CodeBlock = ({ code, language = "typescript" }: { code: string, language?: string }) => (
    <div className="relative">
      <button 
        className="absolute right-2 top-2 p-1 rounded-md bg-white/10 hover:bg-white/20 transition-colors"
        onClick={() => copyToClipboard(code)}
      >
        {copiedCode === code ? <Check size={16} /> : <Copy size={16} />}
      </button>
      <pre className="p-4 bg-black/30 rounded-md overflow-x-auto text-xs">
        <code className="text-white">{code}</code>
      </pre>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-950 to-black">
      <Header />
      <div className="container mx-auto px-4 pt-24 pb-24">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Rendszer</h1>
            <p className="text-gray-400">Designrendszer dokumentáció és exportálási eszközök</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Github size={16} />
              <span>GitHub Repo</span>
            </Button>
            <Button variant="default" className="gap-2">
              <Download size={16} />
              <span>Letöltés</span>
            </Button>
          </div>
        </div>

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="mb-8">
          <TabsList className="bg-black/20 border border-white/10 w-full justify-start">
            <TabsTrigger value="components">Komponensek</TabsTrigger>
            <TabsTrigger value="tokens">Design Tokenek</TabsTrigger>
            <TabsTrigger value="utilities">CSS Segédeszközök</TabsTrigger>
            <TabsTrigger value="installation">Telepítési útmutató</TabsTrigger>
            <TabsTrigger value="export">Exportálás</TabsTrigger>
          </TabsList>

          <TabsContent value="components" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
              <div className="col-span-1 md:col-span-2">
                <Card className="bg-black/20 border-white/10 sticky top-24">
                  <CardHeader>
                    <CardTitle>UI Komponensek</CardTitle>
                    <CardDescription>
                      Válaszd ki a komponenseket, amelyeket meg szeretnél tekinteni
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[60vh] pr-4">
                      <div className="space-y-1">
                        {components.map((component) => (
                          <Button 
                            key={component.name}
                            variant="ghost"
                            className="w-full justify-start text-left"
                            onClick={() => document.getElementById(component.name.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                          >
                            {component.name}
                          </Button>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>
              <div className="col-span-1 md:col-span-4">
                <div className="space-y-10">
                  {/* Accordion Example */}
                  <section id="accordion" className="bg-black/20 border border-white/10 rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">Accordion</h2>
                    <div className="mb-6">
                      <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                          <AccordionTrigger>Mi ez a komponens könyvtár?</AccordionTrigger>
                          <AccordionContent>
                            Ez egy újrafelhasználható komponens könyvtár, amelyet bármilyen Vite projektben használhatsz.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                          <AccordionTrigger>Hogyan használhatom?</AccordionTrigger>
                          <AccordionContent>
                            Kövesd a telepítési útmutatót, és importáld a komponenseket a projektedbe.
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-400 mb-2">Importálás</h3>
                      <CodeBlock code={`import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"`} />
                      
                      <h3 className="text-sm font-medium text-gray-400 mt-4 mb-2">Használat</h3>
                      <CodeBlock code={`<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Accordion cím</AccordionTrigger>
    <AccordionContent>
      Accordion tartalom
    </AccordionContent>
  </AccordionItem>
</Accordion>`} />
                    </div>
                  </section>

                  {/* Button Example */}
                  <section id="button" className="bg-black/20 border border-white/10 rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">Button</h2>
                    <div className="mb-6 flex flex-wrap gap-4">
                      <Button variant="default">Default</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="outline">Outline</Button>
                      <Button variant="ghost">Ghost</Button>
                      <Button variant="link">Link</Button>
                      <Button variant="destructive">Destructive</Button>
                      <Button disabled>Disabled</Button>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-400 mb-2">Importálás</h3>
                      <CodeBlock code={`import { Button } from "@/components/ui/button"`} />
                      
                      <h3 className="text-sm font-medium text-gray-400 mt-4 mb-2">Változatok</h3>
                      <CodeBlock code={`<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button variant="destructive">Destructive</Button>
<Button disabled>Disabled</Button>`} />
                    </div>
                  </section>

                  {/* Alert Example */}
                  <section id="alert" className="bg-black/20 border border-white/10 rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">Alert</h2>
                    <div className="mb-6">
                      <Alert>
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Figyelem</AlertTitle>
                        <AlertDescription>
                          Ez egy alapértelmezett figyelmeztető üzenet.
                        </AlertDescription>
                      </Alert>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-400 mb-2">Importálás</h3>
                      <CodeBlock code={`import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"`} />
                      
                      <h3 className="text-sm font-medium text-gray-400 mt-4 mb-2">Használat</h3>
                      <CodeBlock code={`<Alert>
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Figyelem</AlertTitle>
  <AlertDescription>
    Ez egy alapértelmezett figyelmeztető üzenet.
  </AlertDescription>
</Alert>`} />
                    </div>
                  </section>

                  {/* Card Example */}
                  <section id="card" className="bg-black/20 border border-white/10 rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">Card</h2>
                    <div className="mb-6">
                      <Card className="bg-black/30 border-white/10">
                        <CardHeader>
                          <CardTitle>Kártya címe</CardTitle>
                          <CardDescription>Kártya leírása itt található.</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p>Kártya tartalma itt található.</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-400 mb-2">Importálás</h3>
                      <CodeBlock code={`import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"`} />
                      
                      <h3 className="text-sm font-medium text-gray-400 mt-4 mb-2">Használat</h3>
                      <CodeBlock code={`<Card>
  <CardHeader>
    <CardTitle>Kártya címe</CardTitle>
    <CardDescription>Kártya leírása itt található.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Kártya tartalma itt található.</p>
  </CardContent>
</Card>`} />
                    </div>
                  </section>

                  {/* More components would go here */}
                  <div className="bg-black/20 border border-white/10 rounded-lg p-6 text-center">
                    <p className="text-gray-400">További komponensek bővítése folyamatban...</p>
                    <Button variant="outline" className="mt-4">Összes komponens megtekintése</Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="tokens" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-black/20 border-white/10">
                <CardHeader>
                  <CardTitle>Színek</CardTitle>
                  <CardDescription>
                    A rendszerben használt színpaletta és a hozzájuk tartozó CSS változók
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {colors.map((color) => (
                      <div key={color.name} className="flex flex-col overflow-hidden rounded-lg border border-white/10">
                        <div className={`h-16 bg-${color.name}`} style={{backgroundColor: `hsl(${color.value})`}}></div>
                        <div className="p-3 bg-black/40">
                          <div className="font-medium">{color.name}</div>
                          <div className="text-xs text-gray-400">{color.variable}: {color.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/20 border-white/10">
                <CardHeader>
                  <CardTitle>Tipográfia</CardTitle>
                  <CardDescription>
                    Betűtípusok és szövegelemek a design rendszerben
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-400 mb-2">Címsorok</h3>
                    <div className="space-y-2">
                      <div className="p-2 border-l-2 border-blue-500">
                        <p className="text-xs text-gray-400">text-3xl font-bold</p>
                        <h1 className="text-3xl font-bold">Címsor 1</h1>
                      </div>
                      <div className="p-2 border-l-2 border-blue-500">
                        <p className="text-xs text-gray-400">text-2xl font-semibold</p>
                        <h2 className="text-2xl font-semibold">Címsor 2</h2>
                      </div>
                      <div className="p-2 border-l-2 border-blue-500">
                        <p className="text-xs text-gray-400">text-xl font-medium</p>
                        <h3 className="text-xl font-medium">Címsor 3</h3>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-400 mb-2">Szövegtörzsek</h3>
                    <div className="space-y-2">
                      <div className="p-2 border-l-2 border-green-500">
                        <p className="text-xs text-gray-400">text-base</p>
                        <p className="text-base">Alap szövegméret - A jó designrendszer konzisztens és könnyen használható.</p>
                      </div>
                      <div className="p-2 border-l-2 border-green-500">
                        <p className="text-xs text-gray-400">text-sm</p>
                        <p className="text-sm">Kis szövegméret - Kisebb szövegek, leírások és megjegyzések számára.</p>
                      </div>
                      <div className="p-2 border-l-2 border-green-500">
                        <p className="text-xs text-gray-400">text-xs</p>
                        <p className="text-xs">Extra kis szövegméret - Jogi szövegek és lábjegyzetek számára.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/20 border-white/10">
                <CardHeader>
                  <CardTitle>Árnyékok</CardTitle>
                  <CardDescription>
                    Előre definiált árnyékstílusok
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-6 bg-card rounded-lg shadow-sm">shadow-sm</div>
                    <div className="p-6 bg-card rounded-lg shadow">shadow</div>
                    <div className="p-6 bg-card rounded-lg shadow-md">shadow-md</div>
                    <div className="p-6 bg-card rounded-lg shadow-lg">shadow-lg</div>
                    <div className="p-6 bg-card rounded-lg shadow-xl">shadow-xl</div>
                    <div className="p-6 bg-card rounded-lg shadow-2xl">shadow-2xl</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/20 border-white/10">
                <CardHeader>
                  <CardTitle>Kerekítések</CardTitle>
                  <CardDescription>
                    Előre definiált lekerekítések
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div className="h-16 bg-primary/30 rounded-none flex items-center justify-center">rounded-none</div>
                    <div className="h-16 bg-primary/30 rounded-sm flex items-center justify-center">rounded-sm</div>
                    <div className="h-16 bg-primary/30 rounded flex items-center justify-center">rounded</div>
                    <div className="h-16 bg-primary/30 rounded-md flex items-center justify-center">rounded-md</div>
                    <div className="h-16 bg-primary/30 rounded-lg flex items-center justify-center">rounded-lg</div>
                    <div className="h-16 bg-primary/30 rounded-full flex items-center justify-center">rounded-full</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-black/20 border-white/10 mt-6">
              <CardHeader>
                <CardTitle>CSS változók exportálása</CardTitle>
                <CardDescription>
                  Másold ki ezt a kódrészletet a CSS változók használatához a projektedben
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CodeBlock code={`@layer base {
  :root {
    --background: 220 33% 8%;
    --foreground: 210 40% 98%;
    --card: 222 47% 5%;
    --card-foreground: 210 40% 98%;
    --popover: 222 47% 5%;
    --popover-foreground: 210 40% 98%;
    --primary: 220 100% 65%;
    --primary-foreground: 210 40% 98%;
    --secondary: 215 25% 20%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217 33% 18%;
    --muted-foreground: 215 20% 65%;
    --accent: 216 34% 18%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 84% 60%;
    --destructive-foreground: 210 40% 98%;
    --border: 217 33% 18%;
    --input: 217 33% 18%;
    --ring: 224 76% 48%;
    --radius: 0.5rem;
  }
}`} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="utilities" className="mt-6">
            <Card className="bg-black/20 border-white/10">
              <CardHeader>
                <CardTitle>CSS Segédeszközök</CardTitle>
                <CardDescription>
                  Előre definiált CSS segédosztályok a projektedhez
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-white/10">
                      <TableHead>Név</TableHead>
                      <TableHead>Leírás</TableHead>
                      <TableHead>Használat</TableHead>
                      <TableHead>Előnézet</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {cssUtilities.map((util) => (
                      <TableRow key={util.name} className="border-white/10">
                        <TableCell className="font-mono text-sm">{util.name}</TableCell>
                        <TableCell>{util.description}</TableCell>
                        <TableCell className="font-mono text-xs">{util.code}</TableCell>
                        <TableCell>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => copyToClipboard(util.code)}
                          >
                            <Copy size={14} className="mr-2" />
                            Másolás
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                <h3 className="text-lg font-medium mt-8 mb-4">Animációk</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="p-4 border border-white/10 rounded-lg bg-black/30">
                    <h4 className="text-sm font-medium mb-2">fade-in</h4>
                    <div className="animate-fade-in p-4 bg-primary/20 rounded">Fade In</div>
                  </div>
                  
                  <div className="p-4 border border-white/10 rounded-lg bg-black/30">
                    <h4 className="text-sm font-medium mb-2">scale-in</h4>
                    <div className="animate-scale-in p-4 bg-primary/20 rounded">Scale In</div>
                  </div>
                  
                  <div className="p-4 border border-white/10 rounded-lg bg-black/30">
                    <h4 className="text-sm font-medium mb-2">accordion-down</h4>
                    <div className="border border-white/10 rounded overflow-hidden">
                      <button className="w-full p-2 text-left bg-black/20">Kattints ide</button>
                      <div className="animate-accordion-down p-2 bg-black/10">Accordion tartalom</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/20 border-white/10 mt-6">
              <CardHeader>
                <CardTitle>Egyéni segédosztályok hozzáadása</CardTitle>
                <CardDescription>
                  Így adhatsz hozzá egyéni segédosztályokat a projektedhez
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CodeBlock code={`@layer utilities {
  .glass-effect {
    @apply bg-white/10 backdrop-blur-lg border border-white/20;
  }
  
  .hover-glow {
    @apply transition-all duration-300 hover:shadow-lg hover:shadow-[hsl(var(--primary))]/25;
  }
  
  .text-gradient {
    @apply bg-clip-text text-transparent bg-gradient-to-r;
  }

  /* Button interactions */
  .btn-primary {
    @apply relative overflow-hidden transition-all duration-300 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-md hover:shadow-lg hover:shadow-blue-500/25 active:scale-95;
  }

  /* Card interactions */
  .card-hover {
    @apply transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg hover:shadow-blue-500/10;
  }
  
  /* Animated elements */
  .shine-effect {
    @apply before:absolute before:inset-0 before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:-translate-x-full before:animate-shine overflow-hidden;
  }
}`} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="installation" className="mt-6">
            <Card className="bg-black/20 border-white/10">
              <CardHeader>
                <CardTitle>Telepítési útmutató</CardTitle>
                <CardDescription>
                  Kövesd a lépéseket a designrendszer telepítéséhez az új projektedben
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Alert className="mb-6">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Megjegyzés</AlertTitle>
                  <AlertDescription>
                    Ez a designrendszer a Vite + React + TypeScript + Tailwind CSS felállással kompatibilis.
                  </AlertDescription>
                </Alert>
                
                <ol className="space-y-8 relative before:absolute before:inset-y-0 before:left-3 before:w-[1px] before:bg-border">
                  {installationSteps.map((step, index) => (
                    <li key={index} className="pl-10 relative">
                      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                        <span className="text-xs font-semibold">{index + 1}</span>
                      </div>
                      <h3 className="text-lg font-medium mb-2">{step.title}</h3>
                      <p className="text-gray-400 mb-3">{step.description}</p>
                      <CodeBlock code={step.code} />
                    </li>
                  ))}
                </ol>
                
                <div className="mt-8">
                  <h3 className="text-lg font-medium mb-4">Verifikáció</h3>
                  <p className="text-gray-400 mb-4">
                    A telepítés ellenőrzéséhez hozz létre egy egyszerű komponenst:
                  </p>
                  <CodeBlock code={`import { Button } from "@/components/ui/button";

export default function TestComponent() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Teszt komponens</h1>
      <Button>Kattints rám</Button>
    </div>
  );
}`} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="export" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-black/20 border-white/10">
                <CardHeader>
                  <CardTitle>
                    <div className="flex items-center">
                      <Package className="h-5 w-5 mr-2" />
                      NPM Csomag
                    </div>
                  </CardTitle>
                  <CardDescription>
                    Exportáld a designrendszert NPM csomagként
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-4">
                    Készítsd elő a package.json fájlt a designrendszer exportálásához:
                  </p>
                  <CodeBlock code={packageJsonTemplate} />
                  
                  <h3 className="text-lg font-medium mt-6 mb-3">Build script</h3>
                  <CodeBlock code={`// tsconfig.json
{
  "compilerOptions": {
    "outDir": "dist",
    "declaration": true
    // ... egyéb beállítások
  },
  "include": ["components/**/*", "lib/**/*"]
}`} />
                  
                  <div className="mt-6">
                    <Button variant="default" className="w-full gap-2">
                      <FileJson size={16} />
                      package.json letöltése
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-black/20 border-white/10">
                <CardHeader>
                  <CardTitle>
                    <div className="flex items-center">
                      <FileJson className="h-5 w-5 mr-2" />
                      Tailwind Konfiguráció
                    </div>
                  </CardTitle>
                  <CardDescription>
                    Exportáld a Tailwind konfigurációs fájlt
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-4">
                    A tailwind.config.js fájl a designrendszer színeivel és egyéb beállításaival:
                  </p>
                  <CodeBlock code={tailwindConfigTemplate} />
                  
                  <div className="mt-6">
                    <Button variant="default" className="w-full gap-2">
                      <FileJson size={16} />
                      tailwind.config.js letöltése
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-black/20 border-white/10 lg:col-span-2">
                <CardHeader>
                  <CardTitle>
                    <div className="flex items-center">
                      <Download className="h-5 w-5 mr-2" />
                      Teljes Komponenskönyvtár Exportálása
                    </div>
                  </CardTitle>
                  <CardDescription>
                    Exportáld a komponenskönyvtárat egy új projektbe
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Komponensek kiválasztása</h3>
                      <div className="space-y-3 max-h-60 overflow-y-auto pr-4">
                        {components.map((component) => (
                          <div key={component.name} className="flex items-center space-x-2">
                            <Switch id={`component-${component.name}`} defaultChecked />
                            <Label htmlFor={`component-${component.name}`}>{component.name}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-4">Függőségek</h3>
                      <div className="space-y-3 max-h-60 overflow-y-auto pr-4">
                        <div className="flex items-center space-x-2">
                          <Switch id="dep-tailwind" defaultChecked />
                          <Label htmlFor="dep-tailwind">tailwindcss</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="dep-lucide" defaultChecked />
                          <Label htmlFor="dep-lucide">lucide-react</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="dep-radix" defaultChecked />
                          <Label htmlFor="dep-radix">@radix-ui/* komponensek</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="dep-cva" defaultChecked />
                          <Label htmlFor="dep-cva">class-variance-authority</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="dep-clsx" defaultChecked />
                          <Label htmlFor="dep-clsx">clsx</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="dep-tw-merge" defaultChecked />
                          <Label htmlFor="dep-tw-merge">tailwind-merge</Label>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex gap-4">
                    <Button variant="default" className="flex-1 gap-2">
                      <Download size={16} />
                      ZIP csomag letöltése
                    </Button>
                    
                    <Button variant="outline" className="flex-1 gap-2">
                      <ExternalLink size={16} />
                      GitHub Repository létrehozása
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-black/20 border-white/10 lg:col-span-2">
                <CardHeader>
                  <CardTitle>
                    <div className="flex items-center">
                      <Eye className="h-5 w-5 mr-2" />
                      CDN Importálás
                    </div>
                  </CardTitle>
                  <CardDescription>
                    Használd a designrendszert közvetlenül CDN-ről
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Alert className="mb-6">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Megjegyzés</AlertTitle>
                    <AlertDescription>
                      A CDN használata csak prototípuskészítésre javasolt. Éles környezetben használj npm csomagot.
                    </AlertDescription>
                  </Alert>
                  
                  <h3 className="text-lg font-medium mb-4">CSS importálása</h3>
                  <CodeBlock code={`<link rel="stylesheet" href="https://cdn.example.com/design-system/styles.css" />`} />
                  
                  <h3 className="text-lg font-medium mt-6 mb-4">JavaScript importálása</h3>
                  <CodeBlock code={`<script type="module">
  import { Button, Card } from 'https://cdn.example.com/design-system/components.js';
  
  // Használat
  document.body.innerHTML = \`
    <div class="p-4">
      <button class="btn-primary">Kattints rám</button>
    </div>
  \`;
</script>`} />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default System;

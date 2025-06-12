import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Chapter from "@/pages/chapter";
import Quiz from "@/pages/quiz";
import ComprehensiveQuiz from "@/pages/comprehensive-quiz";
import AiChat from "@/pages/ai-chat";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/chapter/:id" component={Chapter} />
      <Route path="/quiz/:id" component={Quiz} />
      <Route path="/comprehensive-quiz" component={ComprehensiveQuiz} />
      <Route path="/ai-chat" component={AiChat} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import CIPD from "./pages/CIPD";
import CIPDTerms from "./pages/CIPDTerms";
import CIPDRisk from "./pages/CIPDRisk";
import CIPDPrivacy from "./pages/CIPDPrivacy";
import CIPDRefund from "./pages/CIPDRefund";
import NotFound from "./pages/NotFound";
import { I18nProvider } from "./lib/i18n";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <I18nProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/termos" element={<Terms />} />
            <Route path="/privacidade" element={<Privacy />} />
            <Route path="/cipd" element={<CIPD />} />
            <Route path="/cipd/termos" element={<CIPDTerms />} />
            <Route path="/cipd/risco" element={<CIPDRisk />} />
            <Route path="/cipd/privacidade" element={<CIPDPrivacy />} />
            <Route path="/cipd/reembolso" element={<CIPDRefund />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </I18nProvider>
  </QueryClientProvider>
);

export default App;

"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
  type ReactNode,
} from "react";

export const WIZARD_STEPS = ["website", "sources", "live-data", "branding", "review"] as const;
export type WizardStep = (typeof WIZARD_STEPS)[number];

export type SourceRow = {
  id: string;
  type: "website" | "file" | "qna";
  status: "pending" | "crawling" | "extracting" | "chunking" | "embedding" | "completed" | "failed";
  input_url?: string | null;
  file_name?: string | null;
  page_count?: number | null;
  error_message?: string | null;
  created_at?: string;
};

export type BrandState = {
  primaryColor: string;
  accentColor: string;
  font: string;
  tone: string;
  applyStyling: boolean;
};

export type LiveDataTool = {
  id: string;
  name: string;
  description: string;
  endpoint: string;
};

export type LiveDataState = {
  enabled: boolean;
  connectionString: string;
  testStatus: "idle" | "testing" | "success" | "error";
  testError: string | null;
  tools: LiveDataTool[];
};

export type EmbedInfo = {
  scriptSnippet: string;
  reactSnippet: string;
  publicId: string;
};

export type WizardState = {
  step: WizardStep;
  botId: string | null;
  botName: string;
  websiteUrl: string;
  websiteStatus: "idle" | "saving" | "success" | "error";
  websiteError: string | null;
  websiteSummary: { pageCount: number } | null;
  sources: SourceRow[];
  sourcesLoading: boolean;
  brand: BrandState;
  liveData: LiveDataState;
  isFinalizing: boolean;
  finalizeError: string | null;
  embed: EmbedInfo | null;
};

const initialState: WizardState = {
  step: "website",
  botId: null,
  botName: "Untitled Assistant",
  websiteUrl: "",
  websiteStatus: "idle",
  websiteError: null,
  websiteSummary: null,
  sources: [],
  sourcesLoading: false,
  brand: {
    primaryColor: "#111827",
    accentColor: "#4F46E5",
    font: "Inter",
    tone: "Professional",
    applyStyling: true,
  },
  liveData: {
    enabled: false,
    connectionString: "",
    testStatus: "idle",
    testError: null,
    tools: [],
  },
  isFinalizing: false,
  finalizeError: null,
  embed: null,
};

type Action =
  | { type: "SET_STEP"; step: WizardStep }
  | { type: "SET_BOT"; botId: string; botName?: string }
  | { type: "SET_WEBSITE_URL"; url: string }
  | { type: "SET_WEBSITE_STATUS"; status: WizardState["websiteStatus"]; error?: string | null }
  | { type: "SET_WEBSITE_SUMMARY"; summary: WizardState["websiteSummary"] }
  | { type: "SET_SOURCES"; sources: SourceRow[] }
  | { type: "ADD_SOURCE"; source: SourceRow }
  | { type: "UPDATE_SOURCE"; source: SourceRow }
  | { type: "REMOVE_SOURCE"; id: string }
  | { type: "SET_SOURCES_LOADING"; loading: boolean }
  | { type: "SET_BRAND"; brand: Partial<BrandState> }
  | { type: "SET_LIVE_DATA"; liveData: Partial<LiveDataState> }
  | { type: "SET_FINALIZING"; value: boolean }
  | { type: "SET_FINALIZE_ERROR"; error: string | null }
  | { type: "SET_EMBED"; embed: EmbedInfo };

function reducer(state: WizardState, action: Action): WizardState {
  switch (action.type) {
    case "SET_STEP":
      return { ...state, step: action.step };
    case "SET_BOT":
      return { ...state, botId: action.botId, botName: action.botName ?? state.botName };
    case "SET_WEBSITE_URL":
      return { ...state, websiteUrl: action.url };
    case "SET_WEBSITE_STATUS":
      return { ...state, websiteStatus: action.status, websiteError: action.error ?? null };
    case "SET_WEBSITE_SUMMARY":
      return { ...state, websiteSummary: action.summary };
    case "SET_SOURCES":
      return { ...state, sources: action.sources };
    case "ADD_SOURCE":
      return { ...state, sources: [...state.sources, action.source] };
    case "UPDATE_SOURCE":
      return {
        ...state,
        sources: state.sources.map((s) => (s.id === action.source.id ? action.source : s)),
      };
    case "REMOVE_SOURCE":
      return { ...state, sources: state.sources.filter((s) => s.id !== action.id) };
    case "SET_SOURCES_LOADING":
      return { ...state, sourcesLoading: action.loading };
    case "SET_BRAND":
      return { ...state, brand: { ...state.brand, ...action.brand } };
    case "SET_LIVE_DATA":
      return { ...state, liveData: { ...state.liveData, ...action.liveData } };
    case "SET_FINALIZING":
      return { ...state, isFinalizing: action.value };
    case "SET_FINALIZE_ERROR":
      return { ...state, finalizeError: action.error };
    case "SET_EMBED":
      return { ...state, embed: action.embed };
    default:
      return state;
  }
}

type WizardContextValue = {
  state: WizardState;
  dispatch: React.Dispatch<Action>;
  goToStep: (step: WizardStep) => void;
  goNext: () => void;
  goBack: () => void;
  canContinue: boolean;
  stepIndex: number;
};

const WizardContext = createContext<WizardContextValue | null>(null);

export function WizardProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const stepIndex = WIZARD_STEPS.indexOf(state.step);

  const goToStep = useCallback((step: WizardStep) => dispatch({ type: "SET_STEP", step }), []);

  const goNext = useCallback(() => {
    const nextIndex = Math.min(stepIndex + 1, WIZARD_STEPS.length - 1);
    dispatch({ type: "SET_STEP", step: WIZARD_STEPS[nextIndex] });
  }, [stepIndex]);

  const goBack = useCallback(() => {
    const prevIndex = Math.max(stepIndex - 1, 0);
    dispatch({ type: "SET_STEP", step: WIZARD_STEPS[prevIndex] });
  }, [stepIndex]);

  const canContinue = useMemo(() => {
    switch (state.step) {
      case "website":
        return Boolean(state.botId) && state.websiteStatus === "success";
      case "sources":
        return true; // sources are optional beyond the website
      case "live-data":
        return true; // live data is opt-in
      case "branding":
        return true;
      default:
        return true;
    }
  }, [state.step, state.botId, state.websiteStatus]);

  const value: WizardContextValue = {
    state,
    dispatch,
    goToStep,
    goNext,
    goBack,
    canContinue,
    stepIndex,
  };

  return <WizardContext.Provider value={value}>{children}</WizardContext.Provider>;
}

export function useWizard() {
  const ctx = useContext(WizardContext);
  if (!ctx) throw new Error("useWizard must be used within a WizardProvider");
  return ctx;
}

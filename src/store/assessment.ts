import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AssessmentSession, AssessmentAnswer, AssessmentResult } from '@/types';

interface AssessmentStore {
  // Current session
  currentSession: AssessmentSession | null;
  
  // Session management
  startSession: (type: string) => void;
  updateSession: (answers: AssessmentAnswer[]) => void;
  completeSession: (result: AssessmentResult) => void;
  clearSession: () => void;
  isSessionActive: () => boolean;
  
  // History management
  completedSessions: AssessmentSession[];
  getCompletedSessions: () => AssessmentSession[];
  getSessionById: (id: string) => AssessmentSession | null;
}

export const useAssessmentStore = create<AssessmentStore>()(
  persist(
    (set, get) => ({
      currentSession: null,
      completedSessions: [],      startSession: (type: string) => {
        const session: AssessmentSession = {
          id: `session-${Date.now()}`,
          type,
          answers: [],
          startedAt: new Date().toISOString(),
          isCompleted: false,
        };
        set({ currentSession: session });
      },

      updateSession: (answers: AssessmentAnswer[]) => {
        const { currentSession } = get();
        if (currentSession) {
          set({
            currentSession: {
              ...currentSession,
              answers,
            },
          });
        }
      },      completeSession: (result: AssessmentResult) => {
        const { currentSession, completedSessions } = get();
        if (currentSession) {
          const completedSession: AssessmentSession = {
            ...currentSession,
            result,
            completedAt: new Date().toISOString(),
            isCompleted: true,
          };
          
          set({
            currentSession: null,
            completedSessions: [...completedSessions, completedSession],
          });
        }
      },

      clearSession: () => {
        set({ currentSession: null });
      },

      isSessionActive: () => {
        const { currentSession } = get();
        return currentSession !== null && !currentSession.isCompleted;
      },

      getCompletedSessions: () => {
        return get().completedSessions;
      },

      getSessionById: (id: string) => {
        const { completedSessions } = get();
        return completedSessions.find(session => session.id === id) || null;
      },
    }),
    {
      name: 'assessment-storage',
      partialize: (state) => ({
        completedSessions: state.completedSessions,
        // Don't persist current session to avoid stale state
      }),
    }
  )
);
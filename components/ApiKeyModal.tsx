import React from 'react';
import { Language } from '../types';

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

/**
 * API Key management is handled strictly via environment variables (process.env.API_KEY).
 * UI for API key entry is disabled to comply with security guidelines.
 * This component is kept as a placeholder if referenced elsewhere, but renders nothing.
 */
const ApiKeyModal: React.FC<ApiKeyModalProps> = () => {
  return null;
};

export default ApiKeyModal;
import { navigationUtils } from '@/utils/navigate';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const NavigationInitializer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigationUtils.setNavigate(navigate);
  }, [navigate]);

  return <>{children}</>;
};

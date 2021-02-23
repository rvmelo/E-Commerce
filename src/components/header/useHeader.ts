import { useCallback } from 'react';
import { useAuth } from '../../hooks/auth';
import { useRecord } from '../../hooks/record';

import { Order } from '../../interfaces';

interface Customer {
  name: string;
}

interface ReturnValue {
  handleSignOut(): void;
  customer: Customer;
}

function useHeader(): ReturnValue {
  const { signOut, customer } = useAuth();
  const { setOrder } = useRecord();

  const handleSignOut = useCallback(() => {
    signOut();
    setOrder({} as Order);
  }, [signOut, setOrder]);

  return { handleSignOut, customer };
}

export default useHeader;

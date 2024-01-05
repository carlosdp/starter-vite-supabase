import { NavigationContainer } from '@react-navigation/native';
import { Session } from '@supabase/supabase-js';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import 'react-native-url-polyfill/auto';

import { supabase } from './lib/supabase';
import { Stack } from './navigation';
import Auth from './screens/Auth';

const queryClient = new QueryClient();

export default function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth
      .getSession()
      .then(({ data: { session } }) => {
        setSession(session);
      })
      .catch(console.error);

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          {session && session.user ? <></> : <Stack.Screen name="Auth" component={Auth} />}
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  public: {
    Tables: {
      archive: {
        Row: {
          archivedon: string;
          completedon: string | null;
          createdon: string;
          data: Json | null;
          expirein: unknown;
          id: string;
          keepuntil: string;
          name: string;
          on_complete: boolean;
          output: Json | null;
          priority: number;
          retrybackoff: boolean;
          retrycount: number;
          retrydelay: number;
          retrylimit: number;
          singletonkey: string | null;
          singletonon: string | null;
          startafter: string;
          startedon: string | null;
          state: Database['public']['Enums']['job_state'];
        };
        Insert: {
          archivedon?: string;
          completedon?: string | null;
          createdon: string;
          data?: Json | null;
          expirein: unknown;
          id: string;
          keepuntil: string;
          name: string;
          on_complete: boolean;
          output?: Json | null;
          priority: number;
          retrybackoff: boolean;
          retrycount: number;
          retrydelay: number;
          retrylimit: number;
          singletonkey?: string | null;
          singletonon?: string | null;
          startafter: string;
          startedon?: string | null;
          state: Database['public']['Enums']['job_state'];
        };
        Update: {
          archivedon?: string;
          completedon?: string | null;
          createdon?: string;
          data?: Json | null;
          expirein?: unknown;
          id?: string;
          keepuntil?: string;
          name?: string;
          on_complete?: boolean;
          output?: Json | null;
          priority?: number;
          retrybackoff?: boolean;
          retrycount?: number;
          retrydelay?: number;
          retrylimit?: number;
          singletonkey?: string | null;
          singletonon?: string | null;
          startafter?: string;
          startedon?: string | null;
          state?: Database['public']['Enums']['job_state'];
        };
        Relationships: [];
      };
      job: {
        Row: {
          completedon: string | null;
          createdon: string;
          data: Json | null;
          expirein: unknown;
          id: string;
          keepuntil: string;
          name: string;
          on_complete: boolean;
          output: Json | null;
          priority: number;
          retrybackoff: boolean;
          retrycount: number;
          retrydelay: number;
          retrylimit: number;
          singletonkey: string | null;
          singletonon: string | null;
          startafter: string;
          startedon: string | null;
          state: Database['public']['Enums']['job_state'];
        };
        Insert: {
          completedon?: string | null;
          createdon?: string;
          data?: Json | null;
          expirein?: unknown;
          id?: string;
          keepuntil?: string;
          name: string;
          on_complete?: boolean;
          output?: Json | null;
          priority?: number;
          retrybackoff?: boolean;
          retrycount?: number;
          retrydelay?: number;
          retrylimit?: number;
          singletonkey?: string | null;
          singletonon?: string | null;
          startafter?: string;
          startedon?: string | null;
          state?: Database['public']['Enums']['job_state'];
        };
        Update: {
          completedon?: string | null;
          createdon?: string;
          data?: Json | null;
          expirein?: unknown;
          id?: string;
          keepuntil?: string;
          name?: string;
          on_complete?: boolean;
          output?: Json | null;
          priority?: number;
          retrybackoff?: boolean;
          retrycount?: number;
          retrydelay?: number;
          retrylimit?: number;
          singletonkey?: string | null;
          singletonon?: string | null;
          startafter?: string;
          startedon?: string | null;
          state?: Database['public']['Enums']['job_state'];
        };
        Relationships: [];
      };
      schedule: {
        Row: {
          created_on: string;
          cron: string;
          data: Json | null;
          name: string;
          options: Json | null;
          timezone: string | null;
          updated_on: string;
        };
        Insert: {
          created_on?: string;
          cron: string;
          data?: Json | null;
          name: string;
          options?: Json | null;
          timezone?: string | null;
          updated_on?: string;
        };
        Update: {
          created_on?: string;
          cron?: string;
          data?: Json | null;
          name?: string;
          options?: Json | null;
          timezone?: string | null;
          updated_on?: string;
        };
        Relationships: [];
      };
      subscription: {
        Row: {
          created_on: string;
          event: string;
          name: string;
          updated_on: string;
        };
        Insert: {
          created_on?: string;
          event: string;
          name: string;
          updated_on?: string;
        };
        Update: {
          created_on?: string;
          event?: string;
          name?: string;
          updated_on?: string;
        };
        Relationships: [];
      };
      version: {
        Row: {
          cron_on: string | null;
          maintained_on: string | null;
          version: number;
        };
        Insert: {
          cron_on?: string | null;
          maintained_on?: string | null;
          version: number;
        };
        Update: {
          cron_on?: string | null;
          maintained_on?: string | null;
          version?: number;
        };
        Relationships: [];
      };
    };
    Views: {
      users: {
        Row: {
          email: string | null;
          id: string | null;
        };
        Insert: {
          email?: string | null;
          id?: string | null;
        };
        Update: {
          email?: string | null;
          id?: string | null;
        };
        Relationships: [];
      };
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      job_state: 'created' | 'retry' | 'active' | 'completed' | 'expired' | 'cancelled' | 'failed';
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null;
          avif_autodetection: boolean | null;
          created_at: string | null;
          file_size_limit: number | null;
          id: string;
          name: string;
          owner: string | null;
          owner_id: string | null;
          public: boolean | null;
          updated_at: string | null;
        };
        Insert: {
          allowed_mime_types?: string[] | null;
          avif_autodetection?: boolean | null;
          created_at?: string | null;
          file_size_limit?: number | null;
          id: string;
          name: string;
          owner?: string | null;
          owner_id?: string | null;
          public?: boolean | null;
          updated_at?: string | null;
        };
        Update: {
          allowed_mime_types?: string[] | null;
          avif_autodetection?: boolean | null;
          created_at?: string | null;
          file_size_limit?: number | null;
          id?: string;
          name?: string;
          owner?: string | null;
          owner_id?: string | null;
          public?: boolean | null;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      migrations: {
        Row: {
          executed_at: string | null;
          hash: string;
          id: number;
          name: string;
        };
        Insert: {
          executed_at?: string | null;
          hash: string;
          id: number;
          name: string;
        };
        Update: {
          executed_at?: string | null;
          hash?: string;
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      objects: {
        Row: {
          bucket_id: string | null;
          created_at: string | null;
          id: string;
          last_accessed_at: string | null;
          metadata: Json | null;
          name: string | null;
          owner: string | null;
          owner_id: string | null;
          path_tokens: string[] | null;
          updated_at: string | null;
          version: string | null;
        };
        Insert: {
          bucket_id?: string | null;
          created_at?: string | null;
          id?: string;
          last_accessed_at?: string | null;
          metadata?: Json | null;
          name?: string | null;
          owner?: string | null;
          owner_id?: string | null;
          path_tokens?: string[] | null;
          updated_at?: string | null;
          version?: string | null;
        };
        Update: {
          bucket_id?: string | null;
          created_at?: string | null;
          id?: string;
          last_accessed_at?: string | null;
          metadata?: Json | null;
          name?: string | null;
          owner?: string | null;
          owner_id?: string | null;
          path_tokens?: string[] | null;
          updated_at?: string | null;
          version?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'objects_bucketId_fkey';
            columns: ['bucket_id'];
            referencedRelation: 'buckets';
            referencedColumns: ['id'];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string;
          name: string;
          owner: string;
          metadata: Json;
        };
        Returns: undefined;
      };
      extension: {
        Args: {
          name: string;
        };
        Returns: string;
      };
      filename: {
        Args: {
          name: string;
        };
        Returns: string;
      };
      foldername: {
        Args: {
          name: string;
        };
        Returns: unknown;
      };
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>;
        Returns: {
          size: number;
          bucket_id: string;
        }[];
      };
      search: {
        Args: {
          prefix: string;
          bucketname: string;
          limits?: number;
          levels?: number;
          offsets?: number;
          search?: string;
          sortcolumn?: string;
          sortorder?: string;
        };
        Returns: {
          name: string;
          id: string;
          updated_at: string;
          created_at: string;
          last_accessed_at: string;
          metadata: Json;
        }[];
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      category: {
        Row: {
          created_at: string | null
          id: string 
          name: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string 
          name?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string 
          name?: string | null
        }
        Relationships: []
      }
      client: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          name: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      work: {
        Row: {
          category_id: string 
          client_id: string 
          created_at: string | null
          description: string | null
          content: string | null
          work_id: string
          thumbnail: string | null
          title: string | null
        }
        Insert: {
          category_id?: string 
          client_id?: string | null
          created_at?: string | null
          description?: string | null
          content: string | null
          work_id?: string
          thumbnail?: string | null
          title?: string | null
        }
        Update: {
          category_id?: string
          client_id?: string | null
          created_at?: string | null
          description?: string | null
          content: string | null
          work_id?: string
          thumbnail?: string | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "work_category_id_fkey"
            columns: ["category_id"]
            referencedRelation: "category"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "work_client_id_fkey"
            columns: ["client_id"]
            referencedRelation: "client"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      install_available_extensions_and_test: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      albums: {
        Row: {
          created_at: string
          description: string | null
          id: string
          title: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          title: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          title?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "albums_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
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
      images: {
        Row: {
          album_id: string | null
          created_at: string
          description: string | null
          file_path: string
          id: string
          title: string
          user_id: string | null
        }
        Insert: {
          album_id?: string | null
          created_at?: string
          description?: string | null
          file_path: string
          id?: string
          title: string
          user_id?: string | null
        }
        Update: {
          album_id?: string | null
          created_at?: string
          description?: string | null
          file_path?: string
          id?: string
          title?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "images_album_id_fkey"
            columns: ["album_id"]
            referencedRelation: "albums"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "images_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
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
          albums_id: string[] | null
          category_id: string | null
          client_id: string | null
          content: string | null
          created_at: string | null
          description: string | null
          id: string
          thumbnail: string | null
          title: string | null
          user_id: string | null
        }
        Insert: {
          albums_id?: string[] | null
          category_id?: string | null
          client_id?: string | null
          content?: string | null
          created_at?: string | null
          description?: string | null
          id: string
          thumbnail?: string | null
          title?: string | null
          user_id?: string | null
        }
        Update: {
          albums_id?: string[] | null
          category_id?: string | null
          client_id?: string | null
          content?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          thumbnail?: string | null
          title?: string | null
          user_id?: string | null
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
          },
          {
            foreignKeyName: "work_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
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

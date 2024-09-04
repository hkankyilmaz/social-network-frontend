export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      follow: {
        Row: {
          createdAt: string
          followerUserId: number | null
          followingUserId: number | null
          id: number
        }
        Insert: {
          createdAt?: string
          followerUserId?: number | null
          followingUserId?: number | null
          id?: number
        }
        Update: {
          createdAt?: string
          followerUserId?: number | null
          followingUserId?: number | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "FK_673eb90803096b4300d2f547a4c"
            columns: ["followerUserId"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["userId"]
          },
          {
            foreignKeyName: "FK_a46b5b444603dfa4e356d8721b6"
            columns: ["followingUserId"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["userId"]
          },
        ]
      }
      like: {
        Row: {
          createdAt: string
          id: number
          postId: number | null
          userUserId: number | null
        }
        Insert: {
          createdAt?: string
          id?: number
          postId?: number | null
          userUserId?: number | null
        }
        Update: {
          createdAt?: string
          id?: number
          postId?: number | null
          userUserId?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "FK_3acf7c55c319c4000e8056c1279"
            columns: ["postId"]
            isOneToOne: false
            referencedRelation: "post"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_9c8d745f61e58ab9be5f5bf44f4"
            columns: ["userUserId"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["userId"]
          },
        ]
      }
      post: {
        Row: {
          content: string
          createdAt: string
          id: number
          images: string
          likesId: number | null
          title: string
          userUserId: number | null
        }
        Insert: {
          content: string
          createdAt?: string
          id?: number
          images: string
          likesId?: number | null
          title: string
          userUserId?: number | null
        }
        Update: {
          content?: string
          createdAt?: string
          id?: number
          images?: string
          likesId?: number | null
          title?: string
          userUserId?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "FK_383f47c98d6fc3e18786e00ed41"
            columns: ["userUserId"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["userId"]
          },
          {
            foreignKeyName: "FK_e9416fda5a158a33fb19c400f1f"
            columns: ["likesId"]
            isOneToOne: false
            referencedRelation: "like"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          Address: string
          created_at: string
          email: string
          firstName: string
          isActive: boolean
          lastName: string
          password: string
          role: string
          userId: number
          username: string
        }
        Insert: {
          Address: string
          created_at?: string
          email: string
          firstName: string
          isActive?: boolean
          lastName: string
          password: string
          role: string
          userId?: number
          username: string
        }
        Update: {
          Address?: string
          created_at?: string
          email?: string
          firstName?: string
          isActive?: boolean
          lastName?: string
          password?: string
          role?: string
          userId?: number
          username?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

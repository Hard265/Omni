import * as React from "react";

export interface AuthContextProps {
    signIn(credintials: {email: string; password: string}):Promise<void>;
    signOut():Promise<void>
    isSignout: boolean;
}

export const AuthContext = React.createContext<AuthContextProps>({
    async signIn(){},
    async signOut(){},
    isSignout: true
})

export default function useAuth(){
    const ctx = React.useContext(AuthContext);
    return ctx

}

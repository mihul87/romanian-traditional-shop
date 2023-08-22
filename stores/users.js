import { defineStore } from 'pinia';

// import { signUp, signIn, signOut } from '~~/composables/useFirebaseAuth';

export const useUserStore = defineStore("user", () => {
     
    const user = ref(null);
    
    const isAuthenticated = computed(() =>  user.value !== null )

    // async function signup(userData) {
    //     user.value = await signUp(userData);
    //     return user;
    // }

    async function login(userData) {
        // user.value = await signIn(userData);
        return user;
    }

    async function userSignOut() {
        user.value = null;
    }

    async function setUser(session) {
        user.value = session;
      }

    return {user, isAuthenticated, setUser, userSignOut}
});
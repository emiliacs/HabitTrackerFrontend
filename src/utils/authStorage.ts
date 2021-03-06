import AsyncStorage from "@react-native-async-storage/async-storage";
const tokenKey = "token";

const setToken = async (token: string): Promise<void> =>
    await AsyncStorage.setItem(tokenKey, token);

const getToken = async (): Promise<string | null> => await AsyncStorage.getItem(tokenKey);

const removeToken = async (): Promise<void> => await AsyncStorage.removeItem(tokenKey);

export default { setToken, getToken, removeToken };

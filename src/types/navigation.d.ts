export type RootStackParamList = {
    Login: undefined;
    Signup: undefined;
    RootSidebarNavigator: undefined;
    Categories: undefined;
    ProductDetails: { name: string };
    Account: undefined;
    NotificationSettings: undefined;
    PasswordSettings: undefined;
    Reviews: { productId: string | number };
    Category: { name: string };
};

export type HomeLayoutParams = {
    Home: undefined;
    Search: undefined;
    Cart: undefined;
    Orders: undefined;
    Settings: undefined;
};

import React, {memo} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from './routes';
import AppScreen from './AppScreen';
import Home from '@screens/tabs/Home';
import Explore from '@screens/tabs/Explore';
import Cart from '@screens/tabs/Cart';
import Offer from '@screens/tabs/Offer';
import Account from '@screens/tabs/Account';
import NotificationList from '@screens/main/Notification/NotificationList';
import NotificationOffer from '@screens/main/Notification/NotificationOffer';
import NotificationFeed from '@screens/main/Notification/NotificationFeed';
import NotificationActivity from '@screens/main/Notification/NotificationActivity';
import MyProfile from '@screens/main/Profile/MyProfile';
import MyName from '@screens/main/Profile/MyName';
import MyGender from '@screens/main/Profile/MyGender';
import MyBirthday from '@screens/main/Profile/MyBirthday';
import MyEmail from '@screens/main/Profile/MyEmail';
import MyPhone from '@screens/main/Profile/MyPhone';
import MyPassword from '@screens/main/Profile/MyPassword';
import MyPayment from '@screens/main/Payment/MyPayment';
import MyCard from '@screens/main/Payment/MyCard';
import MyPaypal from '@screens/main/Payment/MyPaypal';
import MyBank from '@screens/main/Payment/MyBank';
import AddNewCard from '@screens/main/Payment/AddNewCard';
import EditCard from '@screens/main/Payment/EditCard';
import ChooseCard from '@screens/main/Payment/ChooseCard';
import PaymentStatus from '@screens/main/Payment/PaymentStatus';
import Flashsale from '@screens/main/Product/Flashsale';
import Megasale from '@screens/main/Product/Megasale';
import Favorite from '@screens/main/Product/Favorite';
import ProductDetail from '@screens/main/Product/ProductDetail';
import CategoryList from '@screens/main/Category/CategoryList';
import MyAddress from '@screens/main/Address/MyAddress';
import NewAddress from '@screens/main/Address/NewAddress';
import EditAddress from '@screens/main/Address/EditAddress';
import DeleteConfirm from '@screens/main/Address/DeleteConfirm';
import ShipTo from '@screens/main/Address/ShipTo';
import MyOrder from '@screens/main/Order/MyOrder';
import OrderDetails from '@screens/main/Order/OrderDetails';
import ReviewList from '@screens/main/Review/ReviewList';
import WriteReview from '@screens/main/Review/WriteReview';
import SearchProduct from '@screens/main/Search/SearchProduct';
import SearchResult from '@screens/main/Search/SearchResult';
import SearchShortBy from '@screens/main/Search/SearchShortBy';
import SearchFilter from '@screens/main/Search/SearchFilter';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.appScreen}
        component={AppScreen}
        options={{headerShown: false, animation: 'slide_from_bottom'}}
      />
      <Stack.Screen
        name={Routes.homeScreen}
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.exploreScreen}
        component={Explore}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.cartScreen}
        component={Cart}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.offerScreen}
        component={Offer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.accountScreen}
        component={Account}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.notificationList}
        component={NotificationList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.notificationOffer}
        component={NotificationOffer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.notificationFeed}
        component={NotificationFeed}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.notificationActivity}
        component={NotificationActivity}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.myProfile}
        component={MyProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.myName}
        component={MyName}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.myGender}
        component={MyGender}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.myBirthday}
        component={MyBirthday}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.myEmail}
        component={MyEmail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.myPhone}
        component={MyPhone}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.myPassword}
        component={MyPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.myPayment}
        component={MyPayment}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.myCard}
        component={MyCard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.myPaypal}
        component={MyPaypal}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.myBank}
        component={MyBank}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.addNewCard}
        component={AddNewCard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.editCard}
        component={EditCard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.chooseCard}
        component={ChooseCard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.paymentStatus}
        component={PaymentStatus}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.flashsale}
        component={Flashsale}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.megasale}
        component={Megasale}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.favorite}
        component={Favorite}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.productDetail}
        component={ProductDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.categoryList}
        component={CategoryList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.myAddress}
        component={MyAddress}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.newAddress}
        component={NewAddress}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.editAddress}
        component={EditAddress}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.deleteConfirm}
        component={DeleteConfirm}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.shipTo}
        component={ShipTo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.myOrder}
        component={MyOrder}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.orderDetail}
        component={OrderDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.reviewList}
        component={ReviewList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.writeReview}
        component={WriteReview}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.searchProduct}
        component={SearchProduct}
        options={{headerShown: false, animation: 'slide_from_bottom'}}
      />
      <Stack.Screen
        name={Routes.searchResult}
        component={SearchResult}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.searchShortBy}
        component={SearchShortBy}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.searchFilter}
        component={SearchFilter}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default memo(RootNavigator);

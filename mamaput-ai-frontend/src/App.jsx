import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPageLayout from "./components/layouts/LandingPageLayout";
import SettingsLayout from "./components/layouts/SettingsLayout";
import MainDashboardLayout from "./components/layouts/MainDashboardLayout";
import NutritionDetailComponent from './components/MainDashboardComponents/NutritionDetailComponent';
import ProfileSettings from "./pages/settings/ProfileSettings";
import AccountSettings from "./pages/settings/AccountSettings";
import Preferences from "./pages/settings/Preferences";
import NotificationSettings from "./pages/settings/NotificationSettings";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import DieticianPage from "./pages/DieticianPage";
import FAQs from "./pages/FAQs";
import Dashboard from "./pages/MainDashboard/Dashboard";
import MealPlans from "./pages/MainDashboard/MealPlans";
import NutritionTracker from "./pages/MainDashboard/NutriTracker";
import Reminder from "./pages/MainDashboard/Reminder";
import History from "./pages/MainDashboard/History";
import Feedback from "./pages/MainDashboard/Feedback";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <LandingPageLayout>
              <Home />
            </LandingPageLayout>
          }
        />
        <Route
          path="/pricing"
          element={
            <LandingPageLayout>
              <Pricing />
            </LandingPageLayout>
          }
        />
        <Route
          path="/pricing"
          element={
            <LandingPageLayout>
              <Features />
            </LandingPageLayout>
          }
        />
        <Route
          path="/dietician-page"
          element={
            <LandingPageLayout>
              <DieticianPage />
            </LandingPageLayout>
          }
        />
        <Route
          path="/faqs"
          element={
            <LandingPageLayout>
              <FAQs />
            </LandingPageLayout>
          }
        />
        <Route
          path="/settings/account"
          element={
            <SettingsLayout>
              <AccountSettings />
            </SettingsLayout>
          }
        />
        <Route
          path="/settings/preferences"
          element={
            <SettingsLayout>
              <Preferences />
            </SettingsLayout>
          }
        />
        <Route
          path="/settings/notifications"
          element={
            <SettingsLayout>
              <NotificationSettings />
            </SettingsLayout>
          }
        />
        <Route
          path="/settings/profile"
          element={
            <SettingsLayout>
              <ProfileSettings />
            </SettingsLayout>
          }
        />       
        <Route
          path="/dashboard"
          element={
            <MainDashboardLayout>
              <Dashboard />
            </MainDashboardLayout>
          }
        />
        <Route
          path="/meal-plans"
          element={
            <MainDashboardLayout>
              <MealPlans />
            </MainDashboardLayout>
          }
        /> 
        <Route path="/nutrition-tracker" element={<MainDashboardLayout><NutritionTracker /></MainDashboardLayout>}>
          <Route path=":nutrient" element={<NutritionDetailComponent />} />
        </Route>
        <Route
          path="/reminders"
          element={
            <MainDashboardLayout>
              <Reminder />
            </MainDashboardLayout>
          }
        />
          <Route
            path="/history"
            element={
              <MainDashboardLayout>
                <History />
              </MainDashboardLayout>
            }
          />
          <Route
            path="/feedback"
            element={
              <MainDashboardLayout>
                <Feedback />
              </MainDashboardLayout>
            }
          />
        </Routes>
    </Router>
  );
}

export default App;

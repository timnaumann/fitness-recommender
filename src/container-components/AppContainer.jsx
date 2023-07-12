import React, { lazy, Suspense, useEffect } from "react";
import "@fixtures/Icons/index";

import { BrowserRouter } from "react-router-dom";

import { Route, Switch, topbar } from "react-router-loading";
import { StartPage } from "@ui-components/Pages/StartPage";
import AppInitialiserContainer from "./AppInitialiserContainer";

import { initialiseGA } from "@ga-tracking/googleanalytics-helper";
import { PATHS } from "../routes";
import { useRecommenderShouldBeTracked } from "@globals/Settings";
import { useUserId } from "@store/store-hooks";
import { Wizard } from "@ui-components/Wizard";
import EndgameWizard from "@ui-components/Wizard/EngameWizard";

const PrivacyPolicy = lazy(() =>
  import("@ui-components/LegalPage/PrivacyPolicy")
);
const LegalNotice = lazy(() => import("@ui-components/LegalPage/LegalNotice"));
const QuestionStagesContainer = lazy(() =>
  import("@container-components/QuestionStagesContainer")
);
const RecommendationStageContainer = lazy(() =>
  import("@container-components/RecommendationStageContainer")
);
const AdminAreaContainer = lazy(() =>
  import("@container-components/AdminAreaContainer")
);
const BlogPage = lazy(() => import("@ui-components/blogpage/BlogPage"));

const AppContainer = () => {
  const userId = useUserId();
  const trackingEnabled = useRecommenderShouldBeTracked();

  useEffect(() => {
    initialiseGA(trackingEnabled, userId);
  }, [trackingEnabled]);

  return (
    <BrowserRouter>
      <AppInitialiserContainer>
        <Suspense fallback={<></>}>
          <Switch>
            <Route path={PATHS.START_PAGE} exact loading>
              <StartPage nextPhase={PATHS.STAGES} />
            </Route>
            <Route path={PATHS.STAGES} loading>
              <Wizard>
                <QuestionStagesContainer />
              </Wizard>
            </Route>
            <Route path={PATHS.RECOMMENDATIONS} loading>
              <EndgameWizard>
                <RecommendationStageContainer />
              </EndgameWizard>
            </Route>
            <Route path={PATHS.LEGAL_PRIVACY}>
              <Wizard>
                <PrivacyPolicy />
              </Wizard>
            </Route>
            <Route path={PATHS.LEGAL_NOTICE}>
              <Wizard>
                <LegalNotice />
              </Wizard>
            </Route>
            <Route path={PATHS.BLOG_PAGE}>
              <Wizard>
                <BlogPage />
              </Wizard>
            </Route>
          </Switch>
          <Route path={PATHS.ADMIN_AREA}>
            <AdminAreaContainer />
          </Route>
        </Suspense>
      </AppInitialiserContainer>
    </BrowserRouter>
  );
};

topbar.config({
  autoRun: false,
  barThickness: 0,
});

export default AppContainer;

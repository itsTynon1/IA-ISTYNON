import { Routes } from '@angular/router';
// import { IndexComponent } from './pages/index/index.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { IndexComponent } from './pages/index/index.component';
import { CommunityFeedComponent } from './pages/community-feed/community-feed.component';
import { CommunityDetailsComponent } from './pages/community-details/community-details.component';
import { ManageSubscriptionComponent } from './pages/manage-subscription/manage-subscription.component';
import { ChatbotComponent } from './pages/chatbot/chatbot.component';
import { ImageGeneratorComponent } from './pages/image-generator/image-generator.component';
import { VoicegeneratorComponent } from './pages/voicegenerator/voicegenerator.component';
import { RegisterComponent } from './pages/register/register.component';
import { FaqComponent } from './pages/faq/faq.component';
import { LoginComponent } from './pages/login/login.component';
import { ResetpasswordComponent } from './pages/resetpassword/resetpassword.component';
import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [
   {
    path:'',
    component:LayoutComponent,
    children:[
        // {
        //     path: '',
        //     loadChildren: () => import('./pages/index/index.component').then((m) => m.routes)
        //   },
        {
            path:'',
            component:IndexComponent,
            title:"Home"
        },
        {
            path:'communityfeed',
            component:CommunityFeedComponent,
            title:"communityfeed"
        },
        {
            path:'communitydetails',
            component:CommunityDetailsComponent,
            title:"communitydetails"
        },
        {
            path:'managesubscription',
            component:ManageSubscriptionComponent,
            title:"managesubscription"
        },
        {
            path:'chatbot',
            component:ChatbotComponent,
            title:'chatbot'
        },
        {
            path:'imagegenerator',
            component:ImageGeneratorComponent,
            title:'imagegenerator'
        },
        {
            path:'voicegenerator',
            component:VoicegeneratorComponent,
            title:'voicegenerator'
        },
        {
            path:'faq',
            component:FaqComponent,
            title:'faq'
        },
        {
            path:'profile',
            component:ProfileComponent,
            title:'profile'
        }
    ]
   },
   {
    path:'register',
    component:RegisterComponent,
    title:'register'
   },
   {
    path:'login',
    component:LoginComponent,
    title:'login'
   },
   {
    path:'resetpassword',
    component:ResetpasswordComponent,
    title:'resetpassword'
   }
];

## Requirements

### Functional Requirements
1. **University-Exclusive Platform**: Email verification with @amrapali.edu domain
2. **User Onboarding**: Multi-step registration with profile setup
3. **Social Feed**: Posts with text, images, videos, links
4. **Advanced Search**: Find users by username, name, department, hobbies
5. **1-on-1 Chat**: Private messaging initiated from profiles
6. **User Profiles**: Display bio, department, hobbies, posts
7. **Feed Filtering**: Filter by department and hobby tags

### Non-Functional Requirements
1. **Mobile-First PWA**: Responsive design, installable, offline-capable
2. **Security**: Password hashing, HTTPS, RLS policies
3. **Performance**: Fast feed loading, image compression, video streaming
4. **Exclusivity**: University email verification as primary gatekeeper

---

## Design System

### Color Palette (ANS Branding)
- **Primary**: Blue (#3B82F6) - University brand color
- **Secondary**: Slate gray for neutral elements
- **Accent**: Lighter blue for hover states
- **Success**: Green for verification states
- **Destructive**: Red for errors and warnings

### Typography
- **Headings**: Bold, clear hierarchy
- **Body**: Readable 16px base, 1.5 line height
- **Labels**: 14px for form labels and metadata

### Component Patterns
- **Cards**: Elevated with subtle shadows
- **Buttons**: Rounded corners, clear touch targets (44px min)
- **Forms**: Inline validation, real-time feedback
- **Navigation**: Bottom tab bar with icons + labels

---

## Tasks

### Phase 1: Core UI Infrastructure & Layout ✓ (Partially Complete)

**Status**: Foundation established, refinements needed

#### 1.1 Project Configuration ✓ COMPLETE
- [x] Vite + React + TypeScript setup
- [x] Tailwind CSS configured with design tokens
- [x] ESLint and project structure
- [x] Dependencies installed (React Router, React Query, Lucide)

**Execution**: Already configured in vite.config.ts, package.json, tailwind.config.ts

---

#### 1.2 Design System Enhancement ✓ COMPLETE
**Objective**: Refine color system and add ANS-specific branding

**Tasks**:
- [x] Enhance CSS custom properties in index.css with ANS brand colors
- [x] Add success/warning/info color variants
- [x] Define spacing scale for consistent layouts
- [x] Add typography scale (h1-h6, body, small)
- [x] Create smooth transition/animation utilities
- [x] Add mobile-specific touch target sizes

**Files Modified**:
- `src/index.css` - Enhanced with ANS brand colors, typography scale, touch targets, safe area utilities
- `tailwind.config.ts` - Extended with success/warning/info colors, animations, spacing utilities

**Completed Features**:
- ANS Blue primary color (#3B82F6 / HSL 217 91% 60%)
- Success (green), Warning (orange), Info (cyan) color variants
- Typography scale (h1-h6) with proper line heights
- Touch target utilities (44px standard, 36px small)
- Safe area insets for mobile notches
- Smooth transition utilities (fast/base/slow)
- Custom animations (fade-in, slide-up, scale-in)
- Enhanced shadow system
- Responsive container padding

---

#### 1.3 Core Layout Components ✓ COMPLETE
**Objective**: Create reusable container and layout components

**Tasks**:
- [x] Bottom navigation bar (MainLayout.tsx) ✓
- [x] Enhance bottom nav with active state animations
- [x] Create responsive container component with max-width constraints
- [x] Add safe area insets for mobile devices (notch support)
- [x] Create sticky header component for pages
- [x] Add pull-to-refresh indicator component

**Files Created/Modified**:
- `src/components/layout/Container.tsx` - Responsive container with size variants (sm/md/lg/full)
- `src/components/layout/PageHeader.tsx` - Sticky header with back button and action slot
- `src/components/layout/PullToRefresh.tsx` - Touch-based pull-to-refresh with visual feedback
- `src/layouts/MainLayout.tsx` - Enhanced with smooth animations, scale effects, and backdrop blur

**Completed Features**:
- Container component with 4 size variants and optional padding
- PageHeader with back navigation, subtitle support, and action slot
- PullToRefresh with touch gesture detection and animated indicator
- Enhanced bottom navigation with scale animations on active state
- Special styling for Post button (rounded background)
- Safe area insets applied to navigation bar
- Backdrop blur effect on navigation for modern look
- Smooth transitions using design system tokens

---

#### 1.4 Base UI Components Library 🔄 IN PROGRESS
**Objective**: Create ANS-specific component variants

**Tasks**:
- [x] Button component exists (shadcn/ui) ✓
- [ ] Create ANS button variants (primary, secondary, ghost, outline)
- [x] Input component exists ✓
- [ ] Enhance input with validation states (error, success, loading)
- [x] Modal/Dialog component exists ✓
- [ ] Create mobile-optimized modal (full-screen on mobile)
- [ ] Loading spinner with ANS branding
- [ ] Skeleton loaders for feed/profile/search
- [x] Toast notification system exists (Sonner) ✓
- [ ] Customize toast styling for ANS

**Files to Create/Modify**:
- `src/components/ui/button.tsx` - Add ANS variants
- `src/components/ui/input.tsx` - Add validation states
- `src/components/ui/loading-spinner.tsx` - Create branded spinner
- `src/components/ui/skeleton.tsx` - Enhance existing skeleton
- `src/components/ui/mobile-modal.tsx` - Full-screen mobile modal

**Estimated Complexity**: 300 LOC × 10 = 3,000 tokens

---

#### 1.5 Routing System Enhancement ✓ MOSTLY COMPLETE
**Objective**: Add route guards and error handling

**Tasks**:
- [x] React Router configured with nested routes ✓
- [ ] Create ProtectedRoute component for auth guards
- [ ] Create PublicOnlyRoute component (redirect if authenticated)
- [ ] Implement loading states during route transitions
- [x] 404 page exists (NotFound.tsx) ✓
- [ ] Create error boundary for route-level errors
- [ ] Add route-based code splitting with React.lazy()

**Files to Create/Modify**:
- `src/components/routing/ProtectedRoute.tsx` - Auth guard
- `src/components/routing/PublicOnlyRoute.tsx` - Reverse auth guard
- `src/App.tsx` - Integrate route guards and lazy loading
- `src/components/ErrorBoundary.tsx` - Enhance existing error boundary

**Estimated Complexity**: 250 LOC × 10 = 2,500 tokens

---

#### 1.6 PWA Configuration 📋 TODO
**Objective**: Make ANS installable and offline-capable

**Tasks**:
- [ ] Install and configure vite-plugin-pwa
- [ ] Create manifest.json with ANS branding
  - App name: "Amrapali Networking System"
  - Short name: "ANS"
  - Theme color: Primary blue
  - Background color: White
- [ ] Generate app icons (192x192, 512x512)
- [ ] Configure service worker for offline functionality
  - Cache static assets
  - Cache API responses with stale-while-revalidate
  - Offline fallback page
- [ ] Add install prompt component
- [ ] Test PWA installation on mobile devices

**Files to Create/Modify**:
- `vite.config.ts` - Add PWA plugin configuration
- `public/manifest.json` - App manifest
- `public/icons/` - App icons (multiple sizes)
- `src/components/pwa/InstallPrompt.tsx` - Install banner
- `src/sw.ts` - Service worker customization (if needed)

**Estimated Complexity**: 200 LOC × 10 = 2,000 tokens

---

#### 1.7 Responsive Design Testing 📋 TODO
**Objective**: Ensure mobile-first design works across devices

**Tasks**:
- [ ] Test layouts on mobile (375px, 414px)
- [ ] Test layouts on tablet (768px, 1024px)
- [ ] Test layouts on desktop (1280px, 1920px)
- [ ] Verify touch targets are minimum 44px
- [ ] Test bottom navigation on various screen sizes
- [ ] Ensure text is readable without zoom
- [ ] Test landscape orientation on mobile
- [ ] Verify safe area insets on notched devices

**Execution Strategy**: Manual testing + responsive design mode

**Estimated Complexity**: Testing phase (no code generation)

---

### Phase 1 Summary

**Completed**:
- ✅ Project setup and configuration
- ✅ Basic routing structure
- ✅ Bottom navigation layout
- ✅ shadcn/ui component library installed

**In Progress**:
- 🔄 Design system refinement
- 🔄 Core layout components
- 🔄 Base UI component variants
- 🔄 Route guards and error handling

**Remaining**:
- 📋 PWA configuration
- 📋 Responsive design testing

**Total Estimated Effort**: ~11,000 tokens for remaining tasks

---

## Discussions

### Design Decisions

**1. Mobile-First Approach**
- Bottom navigation chosen over sidebar for mobile accessibility
- Touch targets sized at 44px minimum for comfortable tapping
- Full-screen modals on mobile for better focus

**2. PWA vs Native App**
- PWA selected for cross-platform compatibility
- Easier deployment and updates
- No app store approval process
- Still provides offline functionality and installation

**3. Design System Architecture**
- Using CSS custom properties for theming flexibility
- Semantic tokens (primary, secondary) over direct colors
- Tailwind for utility-first styling with design system constraints

**4. Component Library Choice**
- shadcn/ui provides unstyled, customizable components
- Full control over styling and behavior
- TypeScript support out of the box
- Radix UI primitives for accessibility

### Technical Considerations

**1. State Management**
- React Query for server state (posts, users, messages)
- React Context for auth state
- Local state (useState) for UI interactions
- No need for Redux/Zustand at current scale

**2. File Upload Strategy**
- Supabase Storage for images and videos
- Client-side compression before upload
- Progressive image loading with blur placeholders
- Video streaming with adaptive bitrate

**3. Real-time Features**
- Supabase Realtime for chat messages
- WebSocket connections for typing indicators
- Optimistic UI updates for better UX
- Fallback to polling if WebSocket fails

**4. Performance Optimization**
- Route-based code splitting
- Image lazy loading with Intersection Observer
- Virtual scrolling for long feeds (react-window)
- Debounced search input
- Memoized components with React.memo

### Security Considerations

**1. Email Verification**
- Primary gatekeeper for university exclusivity
- Supabase Auth handles verification flow
- Custom domain validation (@amrapali.edu)
- Rate limiting on verification attempts

**2. Data Access**
- Row Level Security (RLS) on all tables
- Users can only see verified university members
- Private data (email) only visible to owner
- Chat messages only accessible to participants

**3. Input Validation**
- Client-side validation for UX
- Server-side validation for security
- Zod schemas for type-safe validation
- Sanitization of user-generated content

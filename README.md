# YaYa Wallet Transaction Dashboard

A modern, responsive React dashboard for monitoring YaYa Wallet transactions with advanced search, pagination, and visual transaction indicators.

## 🎯 Features

- **Transaction Table**: Display all transaction details (ID, sender, receiver, amount, currency, cause, date)
- **Visual Indicators**: Color-coded rows and icons for incoming/outgoing/top-up transactions
- **Search Functionality**: Search by sender, receiver, cause, or transaction ID
- **Pagination**: Navigate through transactions with URL-based page parameters
- **Responsive Design**: Mobile-first approach with breakpoints for all screen sizes
- **Real-time API Integration**: Secure connection to YaYa Wallet REST API
- **Error Handling**: Comprehensive error states with retry functionality
- **Loading States**: Smooth loading animations and skeleton screens

  

### Key Design Decisions

1. **Security First**: API credentials are stored in environment variables, never exposed in client code
2. **Modular Architecture**: Each component has a single responsibility for maintainability
3. **Type Safety**: Comprehensive TypeScript types for all data structures
4. **Error Resilience**: Graceful error handling with user-friendly messages
5. **Performance**: Efficient pagination and search to handle large datasets

## 🔧 Setup Instructions

### Prerequisites
- Node.js 16+ and npm
- YaYa Wallet API credentials

### Installation

1. **Clone and install dependencies**:
```bash
git clone https://github.com/MelakuAzene21/YAYA-Wallet
npm install
```

2. **Configure environment variables**:
```bash
cp .env.example .env
```
Edit `.env` with your API credentials:
```
VITE_YAYA_API_KEY=your_api_key_here
VITE_YAYA_API_SECRET=your_api_secret_here
VITE_YAYA_BASE_URL=https://sandbox.yayawallet.com/api/en
```

3. **Start development server**:
```bash
npm run dev
```

## 🧪 Testing

### Manual Testing Scenarios

1. **Transaction Loading**:
   - Verify transactions load on initial page visit
   - Test pagination navigation (forward/backward)
   - Confirm URL updates with page parameter

2. **Search Functionality**:
   - Search by transaction ID (exact match)
   - Search by sender/receiver names (partial match)
   - Search by cause/description
   - Test empty search results

3. **Visual Indicators**:
   - **Incoming**: Green border, down-left arrow (receiver = current user)
   - **Outgoing**: Red border, up-right arrow (sender = current user)
   - **Top-up**: Blue border, refresh icon (sender = receiver)

4. **Responsive Design**:
   - Mobile (<768px): Simplified pagination, stacked layout
   - Tablet (768-1024px): Balanced layout with horizontal scrolling
   - Desktop (>1024px): Full table display with all features

5. **Error Handling**:
   - Network connectivity issues
   - Invalid API credentials
   - API rate limiting
   - Malformed responses

### Security Testing

- ✅ API credentials not exposed in browser
- ✅ HTTPS-only API communication
- ✅ Input sanitization for search queries
- ✅ No sensitive data in URL parameters

## 🎨 Design System

### Color Palette
- **Primary Blue**: #3B82F6 (navigation, actions)
- **Success Green**: #10B981 (incoming transactions)
- **Warning Orange**: #F59E0B (neutral states)
- **Error Red**: #EF4444 (outgoing transactions)
- **Gray Scale**: #F9FAFB to #111827 (backgrounds, text)

### Visual Hierarchy
- **Typography**: Inter font family with 3 weights (400, 500, 600)
- **Spacing**: 8px grid system for consistent layouts
- **Shadows**: Subtle elevation for depth without distraction
- **Animation**: 200ms transitions for smooth interactions

## 🚀 Production Considerations

### Performance
- Pagination limits API requests and rendering load
- Debounced search to prevent excessive API calls
- Memoized components to prevent unnecessary re-renders

### Scalability
- Modular component architecture allows easy feature additions
- Service layer abstracts API details for easy endpoint changes
- TypeScript ensures type safety as the codebase grows

### Monitoring
- Error boundary integration ready for production error tracking
- API response time logging for performance monitoring
- User interaction analytics integration points

## 📱 Mobile Responsiveness

The dashboard adapts seamlessly across devices:

- **Mobile Portrait**: Single-column layout, simplified pagination
- **Mobile Landscape**: Horizontal scrolling for table data
- **Tablet**: Balanced two-column layout with touch-friendly controls
- **Desktop**: Full-width table with advanced pagination controls

## 🔐 Security Implementation

1. **API Key Management**: Stored in environment variables, never in source code
2. **Request Security**: All API calls use HTTPS with proper headers
3. **Input Validation**: Search queries are sanitized before API calls
4. **Error Handling**: Generic error messages prevent information leakage

## 🎯 Problem-Solving Approach

1. **API Integration**: Started with understanding YaYa Wallet API structure
2. **Component Design**: Built reusable components following React best practices
3. **State Management**: Used custom hooks for clean state logic separation
4. **Error Handling**: Implemented comprehensive error boundaries and user feedback
5. **Testing Strategy**: Manual testing focused on user workflows and edge cases

## 💡 Future Enhancements

- Export transactions to CSV/PDF
- Real-time transaction updates via WebSocket
- Advanced filtering (date range, amount range, transaction type)
- Transaction details modal with expanded information
- Dark mode support with system preference detection

---

This dashboard demonstrates production-ready code with attention to security, user experience, and maintainability. The modular architecture supports easy testing and future feature development.

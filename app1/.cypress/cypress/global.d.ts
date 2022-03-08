/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     *  Window object with additional properties used during test.
     */
    window(options?: Partial<Loggable & Timeoutable>): Chainable<CustomWindow>;

    /**
     * Custom command to make taking Percy snapshots with full name formed from the test title + suffix easier
     */
    visualSnapshot(maybeName?): Chainable<any>;

    getBySel(dataTestAttribute: string, args?: any): Chainable<Element>;
    getBySelLike(dataTestPrefixAttribute: string, args?: any): Chainable<Element>;

    /**
     * Fetch React component instance associated with received element subject
     */
    reactComponent(): Chainable<any>;

    /**
     * Select data range within date range picker component
     */
    pickDateRange(startDate: Date, endDate: Date): Chainable<void>;

    /**
     * Select transaction amount range
     */
    setTransactionAmountRange(min: number, max: number): Chainable<any>;

    /**
     * Paginate to the next page in transaction infinite-scroll pagination view
     */
    nextTransactionFeedPage(service: string, page: number): Chainable<any>;

    /**
     * Logs-in user by using UI
     */
    login(username: string, password: string, loginOptions?: LoginOptions): void;

    /**
     * Logs-in user by using Okta API request
     */
    loginByOktaApi(username: string, password?: string): Chainable<Response>;

    /**
     * Logs in bypassing UI by triggering XState login event
     */
    loginByXstate(username: string, password?: string): Chainable<any>;

    /**
     * Logs out via bypassing UI by triggering XState logout event
     */
    logoutByXstate(): Chainable<void>;

    /**
     * Logs in via Auth0 API
     */
    loginByAuth0Api(username: string, password?: string): Chainable<any>;

    /**
     * Switch current user by logging out current user and logging as user with specified username
     */
    switchUserByXstate(username: string): Chainable<any>;

    /**
     * Create Transaction via bypassing UI and using XState createTransactionService
     */
    createTransaction(payload): Chainable<any>;

    /**
     * Logs in to AWS Cognito via Amplify Auth API bypassing UI using Cypress Task
     */
    loginByCognitoApi(username: string, password: string): Chainable<any>;
  }
}

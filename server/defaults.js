// THESE ARE DEFAULT SETTINGS, DO NOT CHANGE THIS FILE.
// Change your local settings on your Pyramid settings page.

module.exports = {
	debug: false,

	// Whether or not to store the log files as text files in a folder
	logLinesFile: false,

	// HTTPS certificate settings
	httpsCertPath: "",
	httpsKeyPath: "",

	timeZone: "UTC",

	webHostname: "0.0.0.0",
	webPort: process.env.YOUR_PORT || process.env.PORT || 3000,

	// Encryption mode
	strongIrcPasswordEncryption: false,

	// Scrollback ("cache") length
	cacheLines: 500,

	// How much to retain in the db
	retainDbValue: 1000000,
	retainDbType: 0,

	// Appearance
	showUserEvents: 1,
	enableUsernameColors: true,
	enableDarkMode: true,
	enableEmojiCodes: true,
	enableEmojiImages: true,
	enableDesktopNotifications: true,
	showActivityFlashes: true,

	// Twitch
	automaticallyJoinTwitchGroupChats: true,
	enableTwitch: true,
	enableTwitchBadges: true,
	enableTwitchColors: true,
	enableTwitchChannelDisplayNames: true,
	colorBlindness: 0,
	enableTwitchUserDisplayNames: 1,
	showTwitchDeletedMessages: true,
	showTwitchClearChats: true,
	showTwitchCheers: 2,
	enableFfzEmoticons: true,
	enableFfzGlobalEmoticons: true,
	enableFfzChannelEmoticons: true,
	enableBttvEmoticons: true,
	enableBttvGlobalEmoticons: true,
	enableBttvChannelEmoticons: true,
	enableBttvAnimatedEmoticons: true,
	enableBttvPersonalEmoticons: true,

	// Restricted mode
	restrictedMode: false,
	restrictedMessagesPerSecondLimit: 100,
	restrictedChannelsLimit: 100,
	restrictedServersLimit: 10,
	restrictedNicknamesLimit: 100,
	restrictedFriendsLimit: 500,
	restrictedConnectionsLimit: 10
};

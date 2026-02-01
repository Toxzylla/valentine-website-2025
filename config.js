// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Meryem",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "💜 will you be my valentine? 💜",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['🌸', '🌸', '🌸', '🌸', '🌸', '🌸'],  // Heart emojis
        bears: ['🐶', '🐱', '🐶', '🐱', '🐶', '🐱']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "do you like me?",                                    // First interaction
            yesBtn: "yes, obv!",                                             // Text for "Yes" button
            noBtn: "no, fuck u!",                                               // Text for "No" button
            secretAnswer: "no, but i love u!!"           // Secret hover message
        },
        second: {
            text: "how much do you love me?",                          // For the love meter
            startText: "this much:",                                   // Text before the percentage
            nextBtn: "next question"                                         // Text for the next button
        },
        third: {
            text: "will you be my valentine then?", // The big question!
            yesBtn: "yes, yes, yes!!!",                                             // Text for "Yes" button
            noBtn: "hell nah, sybau!"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "ok, but i'll always luv u more!",  // Shows when they go past 5000%
        high: "ok, but i still luv u more!",              // Shows when they go past 1000%
        normal: "ok, but i luv u more!"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "yay, u said yes!!",
        message: "r u gonna kiss me then??",
        emojis: "💜💜💜💜💜💜"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffd6ff",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffd6ff",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#BF1A1A",     // Button color (should stand out against the background)
        buttonHover: "#a4133c",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#62109F"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.7s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dvjeobjto/video/upload/v1769955737/Mac_Miller_-_My_Favorite_Part_feat._Ariana_Grande_u9vkof.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 

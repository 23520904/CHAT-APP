import { THEMES } from "../constants";
import { useThemeStore } from "../store/useThemeStore";
import { Send, Palette, Eye, Sparkles, Zap, Star, Heart, Circle } from "lucide-react";

const PREVIEW_MESSAGES = [
  {
    id: 1,
    content: "Hey! How's it going?",
    isSent: false,
    time: "12:00 PM",
  },
  {
    id: 2,
    content: "I'm doing great! Just working on some amazing new features",
    isSent: true,
    time: "12:01 PM",
  },
  {
    id: 3,
    content: "That sounds exciting! What kind of features?",
    isSent: false,
    time: "12:02 PM",
  },
  {
    id: 4,
    content: "Can't wait to show you! It's going to be incredible!",
    isSent: true,
    time: "12:03 PM",
  },
];

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 via-primary/5 to-secondary/10 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 pt-16 max-w-7xl relative z-10">
        <div className="space-y-12">
          {/* Theme Selection - More Exciting */}
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 blur-lg"></div>
            <div className="relative card bg-base-100/90 backdrop-blur-sm shadow-2xl border-2 border-primary/30">
              <div className="card-body p-8">
                <div className="text-left mb-8">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="p-3 bg-gradient-to-br from-primary to-primary/80 rounded-2xl shadow-lg">
                      <Palette className="size-6 text-primary-content" />
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      Theme
                    </h2>
                  </div>
                  <p className="text-lg text-base-content/70">
                    Choose a theme for your Interface
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
                  {THEMES.map((t, index) => (
                    <button
                      key={t}
                      className={`
                        group relative flex flex-col items-center gap-3 p-6 rounded-2xl transition-all duration-500 hover:scale-110 hover:-rotate-2
                        ${
                          theme === t
                            ? "bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary shadow-2xl shadow-primary/30 scale-105"
                            : "bg-base-200/50 border-2 border-transparent hover:bg-gradient-to-br hover:from-base-200 hover:to-base-300 hover:shadow-xl hover:border-primary/50"
                        }
                      `}
                      onClick={() => setTheme(t)}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {/* Glow Effect */}
                      {theme === t && (
                        <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 to-secondary/30 blur-lg animate-pulse"></div>
                      )}

                      {/* Theme Preview with enhanced visual */}
                      <div
                        className="relative size-16 rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300"
                        data-theme={t}
                      >
                        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1 p-2">
                          <div className="rounded-lg bg-primary shadow-sm"></div>
                          <div className="rounded-lg bg-secondary shadow-sm"></div>
                          <div className="rounded-lg bg-accent shadow-sm"></div>
                          <div className="rounded-lg bg-neutral shadow-sm"></div>
                        </div>

                        {/* Selection Indicator */}
                        {theme === t && (
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                            <div className="size-8 bg-primary rounded-full flex items-center justify-center shadow-lg animate-bounce">
                              <span className="text-primary-content font-bold">
                                ✓
                              </span>
                            </div>
                          </div>
                        )}

                        {/* Hover Sparkle Effect */}
                        <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Sparkles className="size-4 text-accent animate-spin" />
                        </div>
                      </div>

                      {/* Theme Name */}
                      <div className="text-center">
                        <span
                          className={`
                          block text-sm font-bold transition-all duration-300
                          ${
                            theme === t
                              ? "text-primary scale-110"
                              : "text-base-content/80 group-hover:text-primary group-hover:scale-105"
                          }
                        `}
                        >
                          {t.charAt(0).toUpperCase() + t.slice(1)}
                        </span>
                        {theme === t && (
                          <span className="block text-xs text-primary/70 font-medium animate-pulse">
                            Active
                          </span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Preview Section - Ultra Eye-Catching */}
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-secondary/20 to-accent/20 blur-lg"></div>
            <div className="relative card bg-base-100/90 backdrop-blur-sm shadow-2xl border-2 border-secondary/30">
              <div className="card-body p-8">
                <div className="text-left mb-8">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="p-3 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl shadow-lg animate-pulse">
                      <Eye className="size-6 text-secondary-content" />
                    </div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                      Preview
                    </h3>
                  </div>
                  <p className="text-lg text-base-content/70">
                    Watch your theme come alive in real-time
                  </p>
                </div>

                <div className="relative bg-gradient-to-br from-base-200/30 to-base-300/30 rounded-3xl p-8 shadow-inner">
                  <div className="max-w-3xl mx-auto">
                    {/* Enhanced Chat Interface */}
                    <div className="relative">
                      <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 blur-xl"></div>
                      <div className="relative bg-base-100 rounded-3xl shadow-2xl border-2 border-primary/20 overflow-hidden">
                        {/* Chat Header - More Dynamic */}
                        <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 border-b-2 border-base-300/50 backdrop-blur-sm">
                          <div className="flex items-center gap-4 px-8 py-6">
                            <div className="relative">
                              <div className="avatar online">
                                <div className="size-14 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-0.5 shadow-lg">
                                  <div className="size-full rounded-full bg-base-100 flex items-center justify-center text-2xl font-bold text-primary">
                                    J
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                John Doe
                              </h3>
                              <div className="flex items-center gap-2">
                                <div className="size-2 bg-success rounded-full animate-pulse"></div>
                                <p className="text-sm font-semibold text-success">
                                  Online
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Chat Messages - More Vibrant */}
                        <div className="bg-gradient-to-b from-base-100 to-base-50 p-8 space-y-6 h-96 overflow-y-auto">
                          {PREVIEW_MESSAGES.map((message, index) => (
                            <div
                              key={message.id}
                              className={`chat ${
                                message.isSent ? "chat-end" : "chat-start"
                              } animate-in slide-in-from-bottom-4`}
                              style={{ animationDelay: `${index * 200}ms` }}
                            >
                              <div className="chat-image avatar">
                                <div
                                  className={`size-10 rounded-full shadow-lg ${
                                    message.isSent
                                      ? "bg-gradient-to-br from-primary to-secondary"
                                      : "bg-gradient-to-br from-accent to-neutral"
                                  }`}
                                >
                                  <span className="flex items-center justify-center size-full text-sm font-bold text-base-100">
                                    {message.isSent ? "Y" : "J"}
                                  </span>
                                </div>
                              </div>
                              <div className="chat-header text-xs font-semibold opacity-70 mb-2">
                                <span
                                  className={
                                    message.isSent
                                      ? "text-primary"
                                      : "text-accent"
                                  }
                                >
                                  {message.isSent ? "You" : "John"}
                                </span>
                                <time className="ml-2">{message.time}</time>
                              </div>
                              <div
                                className={`
                                chat-bubble shadow-xl  transition-all hover:scale-105 hover:shadow-2xl
                                ${
                                  message.isSent
                                    ? "chat-bubble-primary bg-gradient-to-br from-primary to-primary/90 border-primary/30"
                                    : "bg-gradient-to-br from-base-200 to-base-300 border-base-400/30"
                                }
                              `}
                              >
                                <p className="text-sm leading-relaxed font-medium">
                                  {message.content}
                                </p>
                              </div>
                              {message.isSent && (
                                <div className="chat-footer opacity-70 text-xs mt-1 font-semibold flex items-center gap-1">
                                  <span className="text-success">
                                    Delivered
                                  </span>
                                  <div className="size-1 bg-success rounded-full animate-pulse"></div>
                                </div>
                              )}
                            </div>
                          ))}

                          {/* Enhanced Typing Indicator */}
                          <div className="chat chat-start animate-in fade-in">
                            <div className="chat-image avatar">
                              <div className="size-10 rounded-full bg-gradient-to-br from-accent to-neutral shadow-lg">
                                <span className="flex items-center justify-center size-full text-sm font-bold text-base-100">
                                  J
                                </span>
                              </div>
                            </div>
                            <div className="chat-bubble bg-gradient-to-br from-base-200 to-base-300 border-base-400/30 shadow-xl">
                              <div className="flex items-center gap-2">
                                <span className="loading loading-dots loading-sm text-primary"></span>
                                <span className="text-xs font-medium text-primary animate-pulse">
                                  typing something amazing...
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Chat Input - More Interactive */}
                        <div className="bg-gradient-to-r from-base-100 to-base-50 border-t-2 border-base-300/50 p-6">
                          <div className="flex gap-4">
                            <div className="flex-1 relative">
                              <input
                                type="text"
                                className="input input-bordered w-full h-14 text-base bg-gradient-to-r from-base-100 to-base-50 border-2 border-primary/30 focus:border-primary focus:shadow-lg focus:shadow-primary/20 transition-all rounded-2xl"
                                placeholder="Type your message..."
                                value=""
                                readOnly
                              />
                              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
                              </div>
                            </div>
                            <button className="btn btn-primary h-14 px-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all bg-gradient-to-br from-primary to-secondary border-none">
                              <Send className="size-6" />
                              <span className="font-bold">Send</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;

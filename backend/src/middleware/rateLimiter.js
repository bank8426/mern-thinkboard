import ratelimit from "../config/upstash.js";
export const rateLimiter = async (req, res, next) => {
  // Use a constant string to limit all requests with a single ratelimit
  // Or use a userID, apiKey or ip address for individual limits.
  const identifier = "api";
  try {
    const { success } = await ratelimit.limit(identifier, { ip: "ip-address" });

    if (!success) {
      return res.status(429).json({
        message: "Too many request, please try again later",
      });
    }

    next();
  } catch (error) {
    console.log("Rate limit error : ", error);
    next(error);
  }
};

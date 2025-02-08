<section className="min-h-screen flex items-center justify-between relative bg-black/60 text-white px-6 py-12">
  {/* Left Section: Name, Gamer Name, Profession, and Time */}
  <div className="flex flex-col gap-4 w-full md:w-auto">
    <motion.h1
      className="text-4xl md:text-6xl font-bold"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      Aarsh Mishra
    </motion.h1>
    <motion.h2
      className="text-xl md:text-2xl text-muted-foreground"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      LuC
    </motion.h2>
    <motion.p
      className="text-lg md:text-xl"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      Software Engineer at Nagarro
    </motion.p>
    <motion.p
      className="text-lg md:text-xl flex items-center gap-2"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <Clock className="w-5 h-5" /> {new Date().toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata", hour: '2-digit', minute: '2-digit', hour12: false })} IST
    </motion.p>
    <motion.p
      className="text-lg md:text-xl flex items-center gap-2"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6 }}
    >
      <Location className="w-5 h-5" /> India
    </motion.p>
  </div>

  {/* Right Section: Social Links */}
  <div className="flex gap-6 ml-auto w-full md:w-auto justify-center md:justify-end mt-8 md:mt-0">
    {socialLinks.map((link) => (
      <a
        key={link.href}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 text-white hover:text-gray-300"
      >
        <span className="text-2xl">{link.icon}</span>
      </a>
    ))}
  </div>
</section>

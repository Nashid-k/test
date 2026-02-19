import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY
      const height = document.documentElement.scrollHeight - window.innerHeight
      const value = height > 0 ? Math.min(100, Math.max(0, (top / height) * 100)) : 0
      setProgress(value)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className="reading-progress-track" aria-hidden="true">
        <motion.div className="reading-progress-fill" animate={{ width: `${progress}%` }} transition={{ duration: 0.2 }} />
      </div>

      {progress > 12 && (
        <motion.button
          type="button"
          className="back-to-top"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          <span>{Math.round(progress)}%</span>
          <span>Top</span>
        </motion.button>
      )}
    </>
  )
}

'use client'

import { useState } from 'react'
import './styles.css'

const bookContent = {
  introduction: {
    title: "Introduction: The Path to Mastery",
    content: `Success is not an accident. It's not luck, privilege, or circumstance alone. Success is the inevitable result of consistent, disciplined action aligned with clear principles.

This book is your roadmap to building an unshakeable foundation for achievement. Whether you're an entrepreneur, athlete, student, or professional, the principles within these pages will transform how you approach your goals and your life.

The journey to mastery begins with a single decision: the decision to take control.`
  },
  chapters: [
    {
      id: 1,
      title: "Chapter 1: The Foundation of Discipline",
      sections: [
        {
          subtitle: "What is Discipline?",
          content: `Discipline is the bridge between goals and accomplishment. It's not about punishment or restriction—it's about freedom. The freedom that comes from mastering yourself.

Discipline means:
• Doing what needs to be done, even when you don't feel like it
• Choosing long-term rewards over short-term gratification
• Building systems that support your highest self
• Showing up consistently, regardless of circumstances`
        },
        {
          subtitle: "The Discipline Equation",
          content: `Discipline = Clarity + Commitment + Consistency

CLARITY: You must know exactly what you want and why you want it. Vague goals produce vague results.

COMMITMENT: Half-hearted efforts produce half-hearted results. You must be all-in.

CONSISTENCY: One workout doesn't build fitness. One chapter doesn't write a book. Small actions, repeated daily, create extraordinary outcomes.`
        },
        {
          subtitle: "Building Your Discipline Muscle",
          content: `Discipline is like a muscle—it grows stronger with use.

Start small:
1. Make your bed every morning
2. Complete one priority task before checking your phone
3. Exercise for 10 minutes daily
4. Read for 15 minutes before bed

These small wins build momentum. Each act of discipline makes the next one easier.`
        }
      ]
    },
    {
      id: 2,
      title: "Chapter 2: The Power of Focus",
      sections: [
        {
          subtitle: "The Focus Crisis",
          content: `We live in an age of infinite distraction. Your attention is under constant attack from notifications, social media, news, and entertainment.

The average person checks their phone 150+ times per day. That's once every 6-7 minutes during waking hours.

Your ability to focus is your competitive advantage. While others are distracted, you can go deep. While others scatter their energy, you can concentrate yours.`
        },
        {
          subtitle: "The Three Levels of Focus",
          content: `MICRO-FOCUS: The ability to concentrate on a single task for 25-90 minutes without distraction.

MACRO-FOCUS: The ability to pursue important goals consistently over weeks and months.

LIFE-FOCUS: The ability to organize your entire life around your core values and priorities.

Master all three levels, and you become unstoppable.`
        },
        {
          subtitle: "Focus Techniques That Work",
          content: `THE SINGLE-TASKING PROTOCOL:
• Choose ONE priority task
• Eliminate all distractions (phone off, door closed)
• Work in 50-minute blocks with 10-minute breaks
• Complete the task before moving to anything else

THE EVENING PLANNING RITUAL:
• Every evening, identify your three Most Important Tasks for tomorrow
• These tasks move your biggest goals forward
• Do these FIRST, before email, meetings, or busywork

THE DIGITAL DETOX:
• No phone for the first hour after waking
• No social media until after 6 PM
• One full day per week completely offline`
        }
      ]
    },
    {
      id: 3,
      title: "Chapter 3: The Rules of Success",
      sections: [
        {
          subtitle: "Rule 1: Take Complete Responsibility",
          content: `Everything in your life is your responsibility. Not your fault—your responsibility.

Your results are your responsibility.
Your attitude is your responsibility.
Your growth is your responsibility.

When you blame circumstances, other people, or bad luck, you give away your power. When you take responsibility, you reclaim it.

The moment you accept 100% responsibility for your life is the moment your life begins to change.`
        },
        {
          subtitle: "Rule 2: Embrace Discomfort",
          content: `All growth happens outside your comfort zone.

• The workout that challenges you makes you stronger
• The conversation you're afraid to have unlocks new opportunities
• The project that scares you teaches you the most

Create a practice of voluntary discomfort:
• Cold showers
• Public speaking
• Having difficult conversations
• Attempting things you might fail at

Discomfort is not your enemy—it's your teacher.`
        },
        {
          subtitle: "Rule 3: Measure Everything",
          content: `What gets measured gets improved.

Track your:
• Daily wins and lessons
• Time allocation (where does it actually go?)
• Energy levels throughout the day
• Progress toward your goals
• Habits you're building

Review weekly. Adjust monthly. Transform yearly.

You can't manage what you don't measure.`
        },
        {
          subtitle: "Rule 4: Protect Your Energy",
          content: `Energy, not time, is your most valuable resource.

ENERGY DRAINS:
• Toxic people
• Endless meetings
• Social media scrolling
• Processed foods
• Poor sleep
• Saying yes when you mean no

ENERGY SOURCES:
• Deep work on meaningful projects
• Physical movement
• Quality sleep
• Inspiring relationships
• Nature
• Learning

Ruthlessly eliminate drains. Double down on sources.`
        },
        {
          subtitle: "Rule 5: Never Stop Learning",
          content: `The moment you stop learning is the moment you start dying.

Your learning system:
• Read 30-60 minutes daily
• Listen to educational podcasts during commutes
• Take one course per quarter
• Find mentors who've achieved what you want
• Teach others what you're learning

Knowledge compounds. The person who reads one book per month will read 120 books in 10 years. That's 120 more than most people read in a lifetime.`
        }
      ]
    },
    {
      id: 4,
      title: "Chapter 4: The Five Pillars of Success",
      sections: [
        {
          subtitle: "Pillar 1: Physical Excellence",
          content: `Your body is the vehicle that carries you through life. If it breaks down, everything else suffers.

THE PHYSICAL EXCELLENCE PROTOCOL:

MOVEMENT: Exercise 5-6 days per week
• 3 days strength training
• 2 days cardiovascular
• 1 day mobility/flexibility

NUTRITION: Eat like an athlete
• Whole foods: vegetables, fruits, lean proteins, healthy fats
• Minimize processed foods and sugar
• Drink 64+ oz of water daily
• Plan and prep meals in advance

RECOVERY: Sleep is non-negotiable
• 7-9 hours nightly
• Consistent sleep and wake times
• Dark, cool bedroom
• No screens 1 hour before bed

Your energy, clarity, and performance depend on this foundation.`
        },
        {
          subtitle: "Pillar 2: Mental Mastery",
          content: `Your mind is your most powerful tool or your worst enemy. Master it.

MEDITATION:
• 10-20 minutes daily
• Focus on breath
• Observe thoughts without attachment
• Build awareness and emotional control

JOURNALING:
• Morning: Set intentions and priorities
• Evening: Review wins and lessons
• Weekly: Big picture reflection

MINDSET WORK:
• Replace limiting beliefs with empowering ones
• Visualize success daily
• Use affirmations that align with your goals
• Surround yourself with positive inputs

READING:
• Biographies of successful people
• Philosophy and wisdom literature
• Books on your craft
• Personal development

Feed your mind excellence, and it will produce excellence.`
        },
        {
          subtitle: "Pillar 3: Emotional Intelligence",
          content: `Success requires working with people. Emotional intelligence is your ability to:
• Understand your own emotions
• Regulate your responses
• Empathize with others
• Navigate relationships effectively

SELF-AWARENESS:
• Notice your emotional triggers
• Understand your patterns
• Know your strengths and weaknesses

SELF-REGULATION:
• Pause before reacting
• Choose your response consciously
• Stay calm under pressure

EMPATHY:
• Listen more than you speak
• Seek to understand before being understood
• Consider others' perspectives

RELATIONSHIP MANAGEMENT:
• Communicate clearly and directly
• Give authentic appreciation
• Address conflicts early and respectfully
• Build genuine connections

Technical skills get you in the door. Emotional intelligence determines how far you go.`
        },
        {
          subtitle: "Pillar 4: Financial Intelligence",
          content: `Money is a tool that expands your options and impact.

THE WEALTH-BUILDING FORMULA:

EARN: Increase your income
• Develop high-value skills
• Solve expensive problems
• Build multiple income streams
• Negotiate confidently

SAVE: Pay yourself first
• Save 20%+ of income automatically
• Build 6-month emergency fund
• Live below your means

INVEST: Make your money work for you
• Max out retirement accounts
• Index funds for long-term growth
• Real estate for cash flow and appreciation
• Invest in your business

PROTECT: Manage risk
• Adequate insurance
• Legal entity structures
• Estate planning
• Diversification

Financial freedom gives you the freedom to pursue your purpose without compromise.`
        },
        {
          subtitle: "Pillar 5: Purpose and Contribution",
          content: `The final pillar connects everything. Success without purpose is empty.

DISCOVER YOUR PURPOSE:
• What problems do you feel called to solve?
• What would you do if money were no object?
• What breaks your heart about the world?
• What brings you alive?

LIVE YOUR PURPOSE:
• Align your work with your values
• Serve something bigger than yourself
• Create value for others
• Leave a meaningful legacy

MEASURE YOUR IMPACT:
• Lives improved
• Value created
• Knowledge shared
• Love given

At the end of your life, you won't remember your bank balance. You'll remember the difference you made.

Build all five pillars, and you'll create a life of extraordinary achievement and deep fulfillment.`
        }
      ]
    },
    {
      id: 5,
      title: "Chapter 5: Building Your Success System",
      sections: [
        {
          subtitle: "Systems Over Goals",
          content: `Goals are important for direction. Systems are essential for progress.

A goal is: "I want to lose 20 pounds"
A system is: "I exercise 5x per week and eat 80% whole foods"

A goal is: "I want to write a book"
A system is: "I write 500 words every morning"

Focus on building systems that, if followed consistently, make your goals inevitable.`
        },
        {
          subtitle: "Your Morning Ritual",
          content: `Win the morning, win the day.

THE POWER MORNING (60-90 minutes):

1. Wake up at the same time daily (5:00-6:00 AM ideal)

2. Hydrate: 16oz water immediately

3. Move: 10-30 minutes exercise

4. Meditate: 10-20 minutes

5. Journal: 10 minutes
   - Gratitude (3 things)
   - Intentions for the day
   - Affirmations

6. Learn: 20-30 minutes reading

7. Plan: Review your MIT (Most Important Tasks)

8. Fuel: Healthy breakfast

Before 8 AM, you've already won. Everything else is momentum.`
        },
        {
          subtitle: "Your Evening Ritual",
          content: `How you end the day determines how you start tomorrow.

THE EVENING WIND-DOWN (30-45 minutes):

1. Review: What went well? What could improve?

2. Plan tomorrow: Identify your 3 MITs

3. Tidy: Clean workspace, lay out tomorrow's clothes

4. Digital sunset: No screens 60 minutes before bed

5. Gratitude: Reflect on 3 positive moments

6. Read: Fiction or light non-fiction (not business)

7. Sleep preparation: Cool room, dark, consistent time

Quality sleep sets up tomorrow's performance.`
        },
        {
          subtitle: "Your Weekly Review",
          content: `Every Sunday, take 60 minutes for your Weekly Review:

REFLECT:
• What were my wins this week?
• What challenges did I face?
• What did I learn?
• How did I live my values?

PLAN:
• What are my priorities for next week?
• What's one thing I can eliminate?
• What's one thing I can improve?
• Who do I need to connect with?

This weekly practice keeps you aligned with your bigger vision while course-correcting in real-time.`
        }
      ]
    }
  ],
  conclusion: {
    title: "Conclusion: Your Journey Begins Now",
    content: `You now have everything you need:

• The discipline to do what needs to be done
• The focus to cut through distraction
• The rules to guide your decisions
• The pillars to build lasting success
• The systems to make progress inevitable

But knowledge without action is worthless.

THE CHALLENGE:

For the next 30 days, commit to:
1. Your morning ritual
2. Your evening ritual
3. Three Most Important Tasks daily
4. One physical workout daily
5. 30 minutes of learning daily
6. Your weekly review

Do this for 30 days, and you won't recognize yourself.

Do this for a year, and your life will be unrecognizable.

Do this for a decade, and you'll achieve what most people call impossible.

The path is clear. The choice is yours.

Will you do what's easy and live a hard life?
Or will you do what's hard and live an easy life?

Your moment is now.

Take the first step.`
  }
}

export default function Home() {
  const [currentSection, setCurrentSection] = useState('introduction')
  const [currentChapter, setCurrentChapter] = useState(null)
  const [bookmarks, setBookmarks] = useState([])
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleBookmark = (section) => {
    if (bookmarks.includes(section)) {
      setBookmarks(bookmarks.filter(b => b !== section))
    } else {
      setBookmarks([...bookmarks, section])
    }
  }

  const renderContent = () => {
    if (currentSection === 'introduction') {
      return (
        <div className="content-section">
          <h1>{bookContent.introduction.title}</h1>
          <div className="content-text">
            {bookContent.introduction.content.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      )
    }

    if (currentSection === 'conclusion') {
      return (
        <div className="content-section">
          <h1>{bookContent.conclusion.title}</h1>
          <div className="content-text">
            {bookContent.conclusion.content.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      )
    }

    if (currentSection.startsWith('chapter-')) {
      const chapterId = parseInt(currentSection.split('-')[1])
      const chapter = bookContent.chapters.find(c => c.id === chapterId)

      return (
        <div className="content-section">
          <h1>{chapter.title}</h1>
          {chapter.sections.map((section, i) => (
            <div key={i} className="chapter-section">
              <h2>{section.subtitle}</h2>
              <div className="content-text">
                {section.content.split('\n\n').map((para, j) => (
                  <p key={j}>{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      )
    }
  }

  return (
    <div className="book-container">
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      <nav className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <div className="book-title">
          <h2>The Mastery Mindset</h2>
          <p className="subtitle">Your Guide to Discipline and Success</p>
        </div>

        <div className="table-of-contents">
          <div
            className={`toc-item ${currentSection === 'introduction' ? 'active' : ''}`}
            onClick={() => { setCurrentSection('introduction'); setMenuOpen(false); }}
          >
            <span>Introduction</span>
          </div>

          {bookContent.chapters.map(chapter => (
            <div
              key={chapter.id}
              className={`toc-item ${currentSection === `chapter-${chapter.id}` ? 'active' : ''}`}
              onClick={() => { setCurrentSection(`chapter-${chapter.id}`); setMenuOpen(false); }}
            >
              <span>{chapter.title}</span>
            </div>
          ))}

          <div
            className={`toc-item ${currentSection === 'conclusion' ? 'active' : ''}`}
            onClick={() => { setCurrentSection('conclusion'); setMenuOpen(false); }}
          >
            <span>Conclusion</span>
          </div>
        </div>

        <div className="progress-tracker">
          <h3>Your Progress</h3>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${((bookmarks.length / (bookContent.chapters.length + 2)) * 100)}%`
              }}
            ></div>
          </div>
          <p className="progress-text">
            {bookmarks.length} of {bookContent.chapters.length + 2} sections completed
          </p>
        </div>
      </nav>

      <main className="content">
        <div className="bookmark-btn-container">
          <button
            className={`bookmark-btn ${bookmarks.includes(currentSection) ? 'bookmarked' : ''}`}
            onClick={() => toggleBookmark(currentSection)}
            title={bookmarks.includes(currentSection) ? 'Remove bookmark' : 'Add bookmark'}
          >
            {bookmarks.includes(currentSection) ? '★' : '☆'}
          </button>
        </div>

        {renderContent()}

        <div className="navigation-buttons">
          {currentSection !== 'introduction' && (
            <button
              className="nav-btn prev"
              onClick={() => {
                if (currentSection === 'conclusion') {
                  setCurrentSection(`chapter-${bookContent.chapters.length}`)
                } else if (currentSection.startsWith('chapter-')) {
                  const chapterId = parseInt(currentSection.split('-')[1])
                  if (chapterId === 1) {
                    setCurrentSection('introduction')
                  } else {
                    setCurrentSection(`chapter-${chapterId - 1}`)
                  }
                }
              }}
            >
              ← Previous
            </button>
          )}

          {currentSection !== 'conclusion' && (
            <button
              className="nav-btn next"
              onClick={() => {
                if (currentSection === 'introduction') {
                  setCurrentSection('chapter-1')
                } else if (currentSection.startsWith('chapter-')) {
                  const chapterId = parseInt(currentSection.split('-')[1])
                  if (chapterId === bookContent.chapters.length) {
                    setCurrentSection('conclusion')
                  } else {
                    setCurrentSection(`chapter-${chapterId + 1}`)
                  }
                }
              }}
            >
              Next →
            </button>
          )}
        </div>
      </main>
    </div>
  )
}

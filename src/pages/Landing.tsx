import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, FileText, GraduationCap, LineChart, MessageCircle, School, Search, Send, Users } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">EduGuide</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-primary">
              How It Works
            </Link>
            <Link href="#colleges" className="text-sm font-medium hover:text-primary">
              Colleges
            </Link>
            <Link href="#counselors" className="text-sm font-medium hover:text-primary">
              Counselors
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
              Testimonials
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-primary">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex">
              Log In
            </Button>
            <Button>Register</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Find Your Perfect College Match
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    EduGuide helps students navigate the college application process with personalized recommendations,
                    expert counseling, and powerful comparison tools.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="px-8">
                    Get Started
                  </Button>
                  <Button size="lg" variant="outline" className="px-8">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=550&width=550"
                  width={550}
                  height={550}
                  alt="Students celebrating college acceptance"
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Everything You Need for College Success
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Our comprehensive platform provides all the tools and resources you need to find and get accepted to
                  your dream college.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                    <LineChart className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Smart Matching Algorithm</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Our advanced algorithm analyzes your academic profile, test scores, and preferences to recommend the
                    best-fit colleges.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                    <Search className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="mt-4">College Search & Compare</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Search, filter, and compare colleges side-by-side based on programs, costs, admission requirements,
                    and more.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                    <MessageCircle className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Expert Counseling</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Connect with experienced college counselors for personalized guidance on applications, essays, and
                    interviews.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                    <FileText className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Document Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Easily upload and organize your transcripts, test scores, essays, and recommendation letters in one
                    secure place.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                    <Calendar className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Application Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Stay on track with personalized timelines and reminders for important application deadlines and
                    tasks.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                    <Send className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Notifications & Updates</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Receive timely notifications about application status, counselor messages, and important college
                    updates.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Process</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How EduGuide Works</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Our streamlined process helps you find and apply to your ideal colleges in just a few simple steps.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    step: 1,
                    title: "Create Your Profile",
                    description:
                      "Register and build your academic profile with your courses, grades, test scores, and extracurricular activities.",
                    icon: <Users className="h-10 w-10 text-primary" />,
                  },
                  {
                    step: 2,
                    title: "Upload Documents",
                    description:
                      "Upload your transcripts, test scores, essays, and other relevant documents to your secure profile.",
                    icon: <FileText className="h-10 w-10 text-primary" />,
                  },
                  {
                    step: 3,
                    title: "Get Matched",
                    description:
                      "Our algorithm analyzes your profile and matches you with colleges that align with your academic achievements and preferences.",
                    icon: <LineChart className="h-10 w-10 text-primary" />,
                  },
                  {
                    step: 4,
                    title: "Explore Recommendations",
                    description:
                      "Review your personalized college recommendations and explore detailed information about each institution.",
                    icon: <Search className="h-10 w-10 text-primary" />,
                  },
                  {
                    step: 5,
                    title: "Connect with Counselors",
                    description:
                      "Schedule sessions with expert counselors who can provide personalized guidance on your college applications.",
                    icon: <MessageCircle className="h-10 w-10 text-primary" />,
                  },
                  {
                    step: 6,
                    title: "Apply with Confidence",
                    description:
                      "Submit your applications with confidence, knowing you've found the best-fit colleges for your academic goals.",
                    icon: <School className="h-10 w-10 text-primary" />,
                  },
                ].map((item, i) => (
                  <Card key={i} className="flex flex-col">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-primary">Step {item.step}</div>
                        <CardTitle>{item.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{item.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Colleges Section */}
        <section id="colleges" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Partner Colleges
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Discover Top Colleges</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  EduGuide partners with hundreds of colleges and universities across the country to help you find your
                  perfect match.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12 md:grid-cols-3 lg:grid-cols-4">
              {Array(8)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="flex flex-col items-center space-y-2 text-center">
                    <div className="relative h-24 w-24 overflow-hidden rounded-lg">
                      <Image
                        src={`/placeholder.svg?height=96&width=96`}
                        width={96}
                        height={96}
                        alt={`College logo ${i + 1}`}
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-base font-medium">University Name</h3>
                  </div>
                ))}
            </div>
            <div className="flex justify-center">
              <Button variant="outline">View All Partner Colleges</Button>
            </div>
          </div>
        </section>

        {/* Counselors Section */}
        <section id="counselors" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Expert Counselors
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Meet Our College Counselors</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Our team of experienced counselors is dedicated to helping you navigate the college application
                  process.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex flex-col items-center space-y-4 text-center">
                  <Image
                    src={`/placeholder.svg?height=200&width=200`}
                    width={200}
                    height={200}
                    alt={`Counselor ${i}`}
                    className="rounded-full object-cover"
                  />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Dr. Alex Johnson</h3>
                    <p className="text-sm text-muted-foreground">Former Admissions Officer, Ivy League</p>
                    <p className="text-sm">
                      Specializes in helping students with competitive applications to top-tier universities. 15+ years
                      of experience in college admissions.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Success Stories
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Our Students Say</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Hear from students who found their perfect college match with EduGuide.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="flex flex-col justify-between">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="flex">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <svg
                              key={i}
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="h-5 w-5 text-primary"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                      </div>
                    </CardTitle>
                    <CardDescription className="text-base">
                      "EduGuide completely transformed my college application experience. The matching algorithm
                      recommended schools I hadn't considered that ended up being perfect for me. My counselor helped me
                      craft compelling essays that highlighted my strengths."
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4">
                      <Image
                        src={`/placeholder.svg?height=40&width=40`}
                        width={40}
                        height={40}
                        alt={`Student ${i}`}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-medium">Jamie Smith</p>
                        <p className="text-xs text-muted-foreground">Accepted to Stanford University</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">FAQ</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Frequently Asked Questions</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Find answers to common questions about our college guidance platform.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-3xl gap-6 py-12">
              {[
                {
                  question: "How does the college matching algorithm work?",
                  answer:
                    "Our algorithm analyzes your academic profile, test scores, extracurricular activities, and preferences to identify colleges that match your strengths and goals. It considers factors like admission requirements, program offerings, campus culture, and financial aid opportunities.",
                },
                {
                  question: "How much does EduGuide cost?",
                  answer:
                    "We offer several subscription plans to fit different needs and budgets. Our basic plan is free and includes college matching and basic resources. Premium plans include counselor sessions, document review, and advanced features. Visit our pricing page for detailed information.",
                },
                {
                  question: "Can I connect with current students or alumni from recommended colleges?",
                  answer:
                    "Yes! Our platform includes a network of student ambassadors and alumni from partner colleges who are available to answer your questions and share their experiences.",
                },
                {
                  question: "How qualified are your counselors?",
                  answer:
                    "All EduGuide counselors have extensive experience in college admissions, with many being former admissions officers from top universities. Each counselor undergoes rigorous training and specializes in specific types of institutions and programs.",
                },
                {
                  question: "Is my information secure on the platform?",
                  answer:
                    "Absolutely. We use industry-leading security measures to protect your personal information and documents. Your data is encrypted and only accessible to authorized counselors and staff members.",
                },
              ].map((item, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle>{item.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{item.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Find Your Perfect College?</h2>
                <p className="max-w-[700px] md:text-xl">
                  Join thousands of students who have found their ideal college match with EduGuide.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" className="px-8">
                  Create Your Profile
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground px-8">
                  Schedule a Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">EduGuide</span>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Accessibility
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} EduGuide. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}


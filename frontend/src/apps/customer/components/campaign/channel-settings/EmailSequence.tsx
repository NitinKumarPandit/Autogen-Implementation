import React from 'react';
import { Mail, Clock, Type, Smartphone, MoreVertical, Lock, ArrowRight, Copy } from 'lucide-react';

interface EmailProps {
  type: string;
  readingTime: string;
  words: number;
  mobileFriendly: boolean;
  content: string;
}

const Email: React.FC<EmailProps> = ({ type, readingTime, words, mobileFriendly, content }) => (
  <div className="bg-white rounded-lg p-6 mb-4 shadow-sm">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center space-x-6">
        <div className="text-gray-700 font-medium">{type}</div>
        <div className="flex items-center space-x-2 text-gray-500">
          <Clock className="w-4 h-4" />
          <span className="text-sm">{readingTime}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-500">
          <Type className="w-4 h-4" />
          <span className="text-sm">{words} words</span>
        </div>
        <div className="flex items-center space-x-2">
          <Smartphone className="w-4 h-4" />
          <span className={`text-sm ${mobileFriendly ? 'text-green-600' : 'text-red-600'}`}>
            {mobileFriendly ? 'Yes' : 'No'}
          </span>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Lock className="w-4 h-4 text-gray-400" />
        <MoreVertical className="w-4 h-4 text-gray-400" />
        <ArrowRight className="w-4 h-4 text-gray-400" />
      </div>
    </div>
    <div className="whitespace-pre-wrap text-gray-700">{content}</div>
  </div>
);

export default function EmailSequence() {
  const emails = [
    {
      type: 'Email introduction',
      readingTime: '36 sec',
      words: 98,
      mobileFriendly: false,
      content: `Hi Zach,

I noticed you recently checked out our website, which prompted me to reach out.

Many community managers face the challenge of manually coordinating member interactions, leading to missed opportunities for meaningful engagement.

Often, existing tools fail to provide personalized outreach at scale, leaving teams overwhelmed and disconnected.

OneShot offers a solution by automating communication and personalizing engagement, freeing up your team to focus on impactful activities.

Is this a challenge you've encountered with community management at tiny-spec-?

P.S. I never knew CEOs could also be "occasional"—does that mean you wear multiple hats at once?`
    },
    {
      type: 'Email follow-up',
      readingTime: '18 sec',
      words: 53,
      mobileFriendly: true,
      content: `Zach, hearing about OneShot's ability to automate tasks might make you wonder if AI messaging can match the personalization of your team's efforts at Tightknit.

That's understandable and I'm sure ensuring authentic connections is a priority.

Would it be fair to assume this is something you've thought about?`
    },
    {
      type: 'Email follow-up',
      readingTime: '14 sec',
      words: 40,
      mobileFriendly: true,
      content: `It seems like you might already have a solid plan to keep your Slack communities engaged at tiny-spec-.

Still, if there's someone else in your team who might face similar challenges, could you point me in their direction?`
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-semibold text-gray-800">Member engagement</h1>
          <div className="flex space-x-3">
            <button className="p-2 rounded-lg bg-white shadow-sm">
              <Copy className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 rounded-lg bg-white shadow-sm">
              <Mail className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
        <div className="space-y-6">
          {emails.map((email, index) => (
            <Email key={index} {...email} />
          ))}
        </div>
        <div className="mt-8 bg-gray-100 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <input
              type="text"
              placeholder="Add sequence instructions"
              className="bg-transparent text-gray-600 placeholder-gray-500 outline-none flex-1"
            />
            <button className="bg-white px-4 py-2 rounded-lg text-gray-700 font-medium shadow-sm">
              Generate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
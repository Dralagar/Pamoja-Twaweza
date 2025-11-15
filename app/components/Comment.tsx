import React, { useState } from 'react';

interface CommentProps {
  postId: string;
  onCommentSubmit: (comment: { name: string; email: string; content: string }) => void;
}

const Comment: React.FC<CommentProps> = ({ postId, onCommentSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await onCommentSubmit({ name, email, content });
      setSubmitStatus('success');
      setName('');
      setEmail('');
      setContent('');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-8 border-t pt-8">
      <h3 className="text-2xl font-bold mb-6">Leave a Comment</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="your@email.com"
            />
          </div>
        </div>
        <div>
          <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
            Comment
          </label>
          <textarea
            id="comment"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Share your thoughts..."
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full md:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? 'Posting...' : 'Post Comment'}
        </button>
      </form>

      {submitStatus === 'success' && (
        <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-lg">
          Comment posted successfully!
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg">
          Failed to post comment. Please try again.
        </div>
      )}
    </div>
  );
};

export default Comment; 
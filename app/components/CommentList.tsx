import React from 'react';
import Image from 'next/image';

interface Comment {
  id: string;
  name: string;
  content: string;
  createdAt: string;
  avatar?: string;
}

interface CommentListProps {
  comments: Comment[];
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold mb-6">Comments</h3>
      <div className="space-y-6">
        {comments.length === 0 ? (
          <p className="text-gray-500">No comments yet. Be the first to comment!</p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="flex space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                  {comment.avatar ? (
                    <Image
                      src={comment.avatar}
                      alt={comment.name}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-blue-100 text-blue-600 font-semibold">
                      {comment.name.charAt(0)}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex-grow">
                <div className="bg-gray-50 rounded-lg px-4 py-3">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">{comment.name}</h4>
                    <span className="text-sm text-gray-500">
                      {formatDate(comment.createdAt)}
                    </span>
                  </div>
                  <p className="text-gray-700">{comment.content}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CommentList; 
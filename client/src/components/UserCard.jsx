import React from 'react';

const UserCard = ({ user }) => (
    <div className='p-3 bg-green-500 rounded-2xl shadow-md'>
        <h2 className="text-md font-semibold mb-2 truncate text-white">
            {user.role === 'customer' ? 'Customer' : 'Driver'}: {user.userId.slice(0, 8)}...
        </h2>
        <div>
            {user.address && (
                <div className="text-xs text-white font-medium mb-1 line-clamp-2 bg-black/20 p-1.5 rounded">
                    📍 {user.address}
                </div>
            )}
            {user.distance && (
                <div className="text-xs text-blue-900 font-bold bg-white/70 p-1.5 rounded mt-2">
                    🛣 {user.distance} • ⏱ {user.eta}
                </div>
            )}
        </div>
    </div>
);

export default UserCard;
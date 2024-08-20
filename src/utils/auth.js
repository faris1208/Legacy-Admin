export function getAccessToken() {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('userToken');
  }
  return null;
}

export function clearToken() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('accessToken');
    }
  }

// export async function refreshToken() {
//   try {
//     const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/refresh-token`, {
//     });
//     const newToken = response.data.accessToken;
//     if (typeof window !== 'undefined') {
//       localStorage.setItem('userToken', newToken);
//     }
//     return newToken;
//   } catch (error) {
//     console.error('Failed to refresh token:', error);
//     return null;
//   }
// }
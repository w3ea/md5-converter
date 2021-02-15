I created a demo website to make it faster to use it: [https://fuv5zkfwkd.vercel.app](https://fuv5zkfwkd.vercel.app)

> I hashed the domain to keep it private

## Getting Started

After installed NPM packages, run the development server:

```bash  
npm run dev  
# or  
yarn dev  
```  

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Need To Know

The API server that exist in public folder (http://api.rest7.com/v1/text_hash.php) isn't reliable, and it does not support the HTTPS protocol either. So I added another API service to cover these issues.
If you want to upload this project on an HTTPS server or get stuck by API during testing, please follow these steps:

1. Open `src/helpers/MD5HashGenerator.ts`
2. Remove or comment line 2 and 16
3. Uncomment line 3 and 17

## Road Map

### Phase 1

- [x] Use Next.js to get advantage of static site at the beginning and other features at the future
- [x] Use framer-motion for more user interaction with the app
- [x] Save user convert list at the local storage
- [x] Use static code analyzer tools (TypeScript and ESlint)
- [x] Create responsive UI with modular components
- [x] Optimize accessibility, and cross-browser compatibility

### Phase 2

- [ ] Create confirm dialog on delete item
- [ ] Use react virtualized for efficiently rendering large list
- [ ] Add PWA with custom service worker to handle offline fallback
- [ ] Test coverage 100% and use cypress (end-to-end test)
- [ ] Detecting Online Status
- [ ] Optimize SEO by adding (openGraph, canonical, description,...)
- [ ] Change home page UI for ultra screen size

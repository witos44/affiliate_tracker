from bs4 import BeautifulSoup, element
from rest_framework.views import APIView
from rest_framework.response import Response

class LinkPreviewAPIView(APIView):
    def _extract_metadata(self, html):
        soup = BeautifulSoup(html, 'html.parser')

        title = soup.title.string.strip() if soup.title and soup.title.string else ''
        description = ''
        image = ''

        for tag in soup.find_all('meta'):
            # ✅ Pastikan hanya proses tag yang valid
            if not isinstance(tag, element.Tag):
                continue

            # ✅ Ambil attribute dan pastikan tipe string
            name_attr = tag.get('name')
            prop_attr = tag.get('property')

            name = str(name_attr).lower() if name_attr else ''
            prop = str(prop_attr).lower() if prop_attr else ''

            # ✅ Cek deskripsi
            if not description and (name == 'description' or prop == 'og:description'):
                content = tag.get('content')
                if content:
                    description = str(content).strip()

            # ✅ Cek gambar
            if not image and prop == 'og:image':
                content = tag.get('content')
                if content:
                    image = str(content).strip()

        return title, description, image

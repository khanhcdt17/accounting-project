import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.scss'],
})
export class ReviewCardComponent implements OnInit {
  items = [
    {
      image:
        'https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300',
      name: 'Đặng Văn Hùng',
      position: 'CEO công ty TNHH NetTeck',
      comment: `Công ty cung cấp các dịch vụ thuế chất lượng cao, giá cả hợp lý và 
      thời gian hoàn thành nhanh chóng. Tôi rất hài lòng với dịch vụ.`,
    },
    {
      image:
        'https://images.unsplash.com/photo-1588361035994-295e21daa761?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=301&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=301',
      name: 'Hồ Thu Thảo',
      position: 'CEO công ty TNHH NetTeck',
      comment: `Dịch vụ chuyên nghiệp và chất lượng. Đội ngũ tư vấn nhiệt tình, hiểu rõ về nhu cầu của khách hàng. 
        Chúng tôi đã có những trải nghiệm cực kỳ hài lòng với dịch vụ của công ty.`,
    },
    {
      image:
        'https://images.unsplash.com/photo-1575377222312-dd1a63a51638?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=302&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=302',
      name: 'Nguyễn Phương Trang',
      position: 'Founder công ty TNHH NetTeck',
      comment: `Công ty cung cấp dịch vụ chất lượng và đẳng cấp. Chúng tôi đã tìm thấy sự chuyên nghiệp và 
        kiến thức sâu rộng từ đội ngũ nhân viên. Đây là đối tác lý tưởng cho khách hàng.`,
    },
    {
      image:
        'https://images.unsplash.com/photo-1549836938-d278c5d46d20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=303&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=303',
      name: 'Lê Diệu Nhi',
      position: 'CEO công ty TNHH NetTeck',
      comment: `Tôi đã hợp tác với công ty trong nhiều dự án và luôn ấn tượng bởi sự chuyên nghiệp và tận tâm của họ. 
      Chất lượng và đội ngũ nhân viên có kiến thức sâu rộng về lĩnh vực thuế.`,
    },
    {
      image:
        'https://images.unsplash.com/photo-1588361035994-295e21daa761?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=301&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=301',
      name: 'Trần Hà',
      position: 'CEO công ty TNHH NetTeck',
      comment: `Công ty mang lại giá trị chất lượng và sự uy tín. Đội ngũ nhân viên có khả năng hiểu rõ về nhu cầu và 
        đưa ra tối ưu cho khách hàng.`,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Kursovaya1
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Конвер файлы.
    /// </summary>
    // *** Start programmer edit section *** (КонверФайлы CustomAttributes)

    // *** End programmer edit section *** (КонверФайлы CustomAttributes)
    [AutoAltered()]
    [Caption("Конвер файлы")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("КонверФайлыE", new string[] {
            "Репозиторий as \'Репозиторий\'",
            "ВыгрФайла.ИмяФайла",
            "ВыгрФайла"})]
    [View("КонверФайлыL", new string[] {
            "Репозиторий as \'Репозиторий\'",
            "ВыгрФайла.ИмяФайла",
            "ВыгрФайла"})]
    public class КонверФайлы : ICSSoft.STORMNET.DataObject
    {
        
        private string fРепозиторий;
        
        private IIS.Kursovaya1.ВыгрФайла fВыгрФайла;
        
        // *** Start programmer edit section *** (КонверФайлы CustomMembers)

        // *** End programmer edit section *** (КонверФайлы CustomMembers)

        
        /// <summary>
        /// Репозиторий.
        /// </summary>
        // *** Start programmer edit section *** (КонверФайлы.Репозиторий CustomAttributes)

        // *** End programmer edit section *** (КонверФайлы.Репозиторий CustomAttributes)
        [StrLen(255)]
        public virtual string Репозиторий
        {
            get
            {
                // *** Start programmer edit section *** (КонверФайлы.Репозиторий Get start)

                // *** End programmer edit section *** (КонверФайлы.Репозиторий Get start)
                string result = this.fРепозиторий;
                // *** Start programmer edit section *** (КонверФайлы.Репозиторий Get end)

                // *** End programmer edit section *** (КонверФайлы.Репозиторий Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (КонверФайлы.Репозиторий Set start)

                // *** End programmer edit section *** (КонверФайлы.Репозиторий Set start)
                this.fРепозиторий = value;
                // *** Start programmer edit section *** (КонверФайлы.Репозиторий Set end)

                // *** End programmer edit section *** (КонверФайлы.Репозиторий Set end)
            }
        }
        
        /// <summary>
        /// Конвер файлы.
        /// </summary>
        // *** Start programmer edit section *** (КонверФайлы.ВыгрФайла CustomAttributes)

        // *** End programmer edit section *** (КонверФайлы.ВыгрФайла CustomAttributes)
        [PropertyStorage(new string[] {
                "ВыгрФайла"})]
        [NotNull()]
        public virtual IIS.Kursovaya1.ВыгрФайла ВыгрФайла
        {
            get
            {
                // *** Start programmer edit section *** (КонверФайлы.ВыгрФайла Get start)

                // *** End programmer edit section *** (КонверФайлы.ВыгрФайла Get start)
                IIS.Kursovaya1.ВыгрФайла result = this.fВыгрФайла;
                // *** Start programmer edit section *** (КонверФайлы.ВыгрФайла Get end)

                // *** End programmer edit section *** (КонверФайлы.ВыгрФайла Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (КонверФайлы.ВыгрФайла Set start)

                // *** End programmer edit section *** (КонверФайлы.ВыгрФайла Set start)
                this.fВыгрФайла = value;
                // *** Start programmer edit section *** (КонверФайлы.ВыгрФайла Set end)

                // *** End programmer edit section *** (КонверФайлы.ВыгрФайла Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "КонверФайлыE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КонверФайлыE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КонверФайлыE", typeof(IIS.Kursovaya1.КонверФайлы));
                }
            }
            
            /// <summary>
            /// "КонверФайлыL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КонверФайлыL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КонверФайлыL", typeof(IIS.Kursovaya1.КонверФайлы));
                }
            }
        }
    }
}
